import appendToSheet from './googleSheetsService.js';
import openAiService from './openAIService.js';
import whatsappService from './whatsappService.js';
import { OPTIONS } from '../utils/constants.js';

class MessageHandler {
  constructor() {
    this.appointmentState = {};
    this.assistantState = {};
  }

  async handleIncomingMessage(message, senderInfo) {
    if (message?.type === 'text') {
      const incomingMessage = message.text.body.toLowerCase().trim();

      if (this.isGreeting(incomingMessage)) {
        await this.sendWelcomeMessage(message.from, message.id, senderInfo);
        await this.sendWelcomeMenu(message.from);
      } else if (incomingMessage === 'media') {
        await this.sendMedia(message.from);
      } else if (this.appointmentState[message.from]) {
        await this.handleAppointmentFlow(message.from, incomingMessage);
      } else if (this.assistantState[message.from]) {
        await this.handleAssistantFlow(message.from, incomingMessage);
      } else {
        const response = `Echo: ${message.text.body}`;
        await whatsappService.sendMessage(message.from, response, message.id);
      }

      await whatsappService.markAsRead(message.id);
    } else if (message?.type === 'interactive') {
      const option = message?.interactive?.button_reply?.id;

      await this.handleMenuOption(message.from, option);
      await whatsappService.markAsRead(message.id);
    }
  }

  isGreeting(message) {
    const greetings = [
      'hola',
      'hello',
      'hi',
      'buenos dias',
      'buenas tardes',
      'buenas noches',
    ];
    return greetings.includes(message);
  }

  async sendWelcomeMessage(to, messageId, senderInfo) {
    const name = this.getSenderName(senderInfo);
    const welcomeMessage = `Hola, ${name}. Bienvenido a MEDPET, tu tienda de mascotas online. ¿En qué puedo ayudarte hoy?`;

    await whatsappService.sendMessage(to, welcomeMessage, messageId);
  }

  getSenderName(senderInfo) {
    return (
      senderInfo.profile?.name?.split(' ')?.[0] ||
      senderInfo.wa_id ||
      'Platzinauta'
    );
  }

  async sendWelcomeMenu(to) {
    const menuMessage = 'Elige una opción:';

    const buttons = [
      { type: 'reply', reply: { id: OPTIONS.SCHEDULE, title: 'Agendar' } },
      { type: 'reply', reply: { id: OPTIONS.CONSULT, title: 'Consultar' } },
      { type: 'reply', reply: { id: OPTIONS.LOCATION, title: 'Ubicación' } },
    ];

    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons);
  }

  async handleMenuOption(to, option) {
    let response;

    switch (option) {
      case OPTIONS.SCHEDULE:
        this.appointmentState[to] = { step: 'name' };
        response = 'Por favor, ingresa tu nombre:';
        break;
      case OPTIONS.CONSULT:
        this.assistantState[to] = { step: 'question' };
        response = 'Realiza tu consulta';
        break;
      case OPTIONS.LOCATION:
        response = 'Te esperamos en nuestra sucursal.';
        await this.sendLocation(to);
        break;
      case OPTIONS.EMERGENCY:
        response =
          'Si esto es una emergencia, te invitamos a llamar a nuestra línea de atención.';
        await this.sendContact(to);
        break;

      default:
        response =
          'Lo siento. No entendí tu selección. Por favor, elige una de las opciones del menú.';
    }

    await whatsappService.sendMessage(to, response);
  }

  async sendMedia(to) {
    // const mediaUrl = 'https://s3.amazonaws.com/gndx.dev/medpet-audio.aac';
    // const caption = 'Bienvenida';
    // const type = 'audio';

    // const mediaUrl = 'https://s3.amazonaws.com/gndx.dev/medpet-imagen.png';
    // const caption = '¡Esto es una Imagen!';
    // const type = 'image';

    const mediaUrl = 'https://s3.amazonaws.com/gndx.dev/medpet-video.mp4';
    const caption = '¡Esto es un video!';
    const type = 'video';

    // const mediaUrl = 'https://s3.amazonaws.com/gndx.dev/medpet-file.pdf';
    // const caption = '¡Esto es un PDF!';
    // const type = 'document';

    await whatsappService.sendMediaMessage(to, type, mediaUrl, caption);
  }

  completeAppointment(to) {
    const appointment = this.appointmentState[to];
    delete this.appointmentState[to];

    const userData = [
      to,
      appointment.name,
      appointment.petName,
      appointment.petType,
      appointment.reason,
      new Date().toISOString(),
    ];

    appendToSheet(userData);

    return `Gracias por agendar tu cita.
Resumen de tu cita:

Nombre: ${appointment.name}
Nombre de la mascota: ${appointment.petName}
Tipo de mascota: ${appointment.petType}
Motivo: ${appointment.reason}

Nos pondremos en contacto contigo pronto para confirmar la fecha y hora de tu cita.`;
  }

  async handleAppointmentFlow(to, message) {
    const state = this.appointmentState[to];

    let response;

    switch (state.step) {
      case 'name':
        state.name = message;
        state.step = 'petName';
        response = 'Gracias. Ahora, ¿cuál es el nombre de tu mascota?';
        break;

      case 'petName':
        state.petName = message;
        state.step = 'petType';
        response = '¿Qué tipo de mascota es? (Perro, gato, ave, etc.)';
        break;

      case 'petType':
        state.petType = message;
        state.step = 'reason';
        response = '¿Cuál es el motivo de tu consulta?';
        break;

      case 'reason':
        state.reason = message;
        state.step = 'finish';
        response = this.completeAppointment(to);
        break;

      default:
        break;
    }

    await whatsappService.sendMessage(to, response);
  }

  async handleAssistantFlow(to, message) {
    const state = this.assistantState[to];
    let response;

    const menuMessage = '¿La respuesta fue de tu ayuda?';
    const buttons = [
      { type: 'reply', reply: { id: OPTIONS.YES_THX, title: 'Sí, gracias' } },
      {
        type: 'reply',
        reply: { id: OPTIONS.MAKE_ANOTHER_Q, title: 'Hacer otra pregunta' },
      },
      { type: 'reply', reply: { id: OPTIONS.EMERGENCY, title: 'Emergencia' } },
    ];

    if (state.step === 'question') {
      response = await openAiService(message);
    }

    delete this.assistantState[to];
    await whatsappService.sendMessage(to, response);
    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons);
  }

  async sendContact(to) {
    const contact = {
      addresses: [
        {
          street: '123 Calle de las Mascotas',
          city: 'Ciudad',
          state: 'Estado',
          zip: '12345',
          country: 'País',
          country_code: 'PA',
          type: 'WORK',
        },
      ],
      emails: [
        {
          email: 'contacto@medpet.com',
          type: 'WORK',
        },
      ],
      name: {
        formatted_name: 'MedPet Contacto',
        first_name: 'MedPet',
        last_name: 'Contacto',
        middle_name: '',
        suffix: '',
        prefix: '',
      },
      org: {
        company: 'MedPet',
        department: 'Atención al Cliente',
        title: 'Representante',
      },
      phones: [
        {
          phone: '+1234567890',
          wa_id: '1234567890',
          type: 'WORK',
        },
      ],
      urls: [
        {
          url: 'https://www.medpet.com',
          type: 'WORK',
        },
      ],
    };

    await whatsappService.sendContactMessage(to, contact);
  }

  async sendLocation(to) {
    const latitude = 6.2071694;
    const longitude = -75.574607;
    const name = 'Platzi Medellín';
    const address = 'Cra. 43A #5A - 113, El Poblado, Medellín, Antioquia.';

    await whatsappService.sendLocationMessage(
      to,
      latitude,
      longitude,
      name,
      address
    );
  }
}

export default new MessageHandler();
