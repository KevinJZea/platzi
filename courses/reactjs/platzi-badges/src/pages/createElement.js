// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi badges from React!</h1>;
// Esto es JSX; por eso se importa React

// const element = React.createElement(__tipo__, __atributos__, __children__);
// const element = React.createElement('a', {href: 'https://platzi.com'}, '¡Hola! Soy los Children.');

const name = 'Kevs';
const KevsEdad = 22;
const edad = () => `Mi edad es ${KevsEdad}.`;

const element = React.createElement('h1', {}, `Hola, soy ${name} container`);


const jsx = <h1>Hola, soy {name}. {edad()}</h1>;

const otro = <div>
    <h1>¡Hola! Soy OtroContenedor</h1>
    <p>Soy ingeniero Front-End</p>
</div>;

const otroConCreateElement = React.createElement(
    'div', 
    {}, 
    React.createElement('h1', {}, 'Hola, Soy contenedor con CreateElement'),
    React.createElement('p', {}, 'También soy Front-End Developer')
);

const container = document.getElementById('app');
const containerKevs = document.getElementById('kevs');
const otroContenedor = document.getElementById('otro');
const otroContenedorConCreate = document.getElementById('otroCreate');

// ReactDOM.render(__que__, __donde__)
ReactDOM.render(element, containerKevs);
//A pesar de estar encima en el código, se muestra debajo porque el <div> está debajo en el HTML
ReactDOM.render(jsx, container);
ReactDOM.render(otro, otroContenedor);
ReactDOM.render(otroConCreateElement, otroContenedorConCreate);

