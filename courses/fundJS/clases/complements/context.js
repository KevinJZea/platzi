
// When talking about context, we are refering to whi this is


const kevs = {
    name: 'Kevs',
    lastName: 'Zea'
};

const bro = {
    name: 'Bro',
    lastName: 'Zea'
};

function saludar(saludo='Hola') {
    console.log(`${saludo}, my name is ${this.name}`);
}

const saludarAKevs = saludar.bind(kevs);

const saludarABro = saludar.bind(bro);

// setTimeout(() => saludar.bind(kevs), 1000);
setTimeout(() => saludar.bind(kevs, 'Hola wey'), 1000);

saludar.call(kevs);


saludar.apply(bro, ['Hola, che']);

