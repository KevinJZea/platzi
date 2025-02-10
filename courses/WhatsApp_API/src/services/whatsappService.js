import { sendToWhatsApp } from './httpRequest/sendToWhatsApp.js';

const cleanPhoneNumber = (number) =>
  number.startsWith('521') ? number.replace('521', '52') : number;

class WhatsAppService {
  async sendMessage(to, body, messageId) {
    const data = {
      messaging_product: 'whatsapp',
      to: cleanPhoneNumber(to),
      text: { body },
      /* context: {
        message_id: messageId,
      }, */
    };

    await sendToWhatsApp(data);
  }

  async markAsRead(messageId) {
    const data = {
      messaging_product: 'whatsapp',
      status: 'read',
      message_id: messageId,
    };

    await sendToWhatsApp(data);
  }

  async sendInteractiveButtons(to, body, buttons) {
    const data = {
      messaging_product: 'whatsapp',
      to: cleanPhoneNumber(to),
      type: 'interactive',
      interactive: {
        type: 'button',
        body: { text: body },
        action: { buttons },
      },
    };

    await sendToWhatsApp(data);
  }

  async sendMediaMessage(to, type, mediaUrl, caption) {
    try {
      const mediaObject = {};

      switch (type) {
        case 'image':
          mediaObject.image = { link: mediaUrl, caption };
          break;
        case 'audio':
          mediaObject.audio = { link: mediaUrl };
          break;
        case 'video':
          mediaObject.video = { link: mediaUrl, caption };
          break;
        case 'document':
          mediaObject.document = {
            link: mediaUrl,
            caption,
            fileName: 'medpet.pdf',
          };
          break;
        default:
          throw new Error('Media Type Not Supported');
      }

      const data = {
        messaging_product: 'whatsapp',
        to: cleanPhoneNumber(to),
        type,
        ...mediaObject,
      };

      await sendToWhatsApp(data);
    } catch (error) {
      console.error('Error sending media', error);
    }
  }

  async sendContactMessage(to, contact) {
    const data = {
      messaging_product: 'whatsapp',
      to: cleanPhoneNumber(to),
      type: 'contacts',
      contacts: [contact],
    };

    await sendToWhatsApp(data);
  }

  async sendLocationMessage(to, latitude, longitude, name, address) {
    const location = { latitude, longitude, name, address };
    const data = {
      messaging_product: 'whatsapp',
      to: cleanPhoneNumber(to),
      type: 'location',
      location,
    };

    await sendToWhatsApp(data);
  }
}

export default new WhatsAppService();
