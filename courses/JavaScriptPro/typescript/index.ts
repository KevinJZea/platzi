// Tipos de datos

let muted: boolean = true;
muted = false;

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

let nombre: string = 'Kevin';
let saludo = `Me llamo ${nombre}`;

let people: string[] = ['Isabel', 'Nicole', 'Raul'];
// people.push(90);

let peopleAndNumbers: Array<string | number> = ['Isabel', 'Nicole', 'Raul'];
peopleAndNumbers.push(90);

enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
}
let colorFavorito: Color = Color.Azul;

// Funciones

function add(a: number, b: number = 0): number {
  return a + b;
}
const sum = add(1, 2);
console.log(sum);

function createAdder(a: number): (arg0: number) => number {
  return function (b: number) {
    return b + a;
  };
}
const addFour = createAdder(4);
const fourPlusSix = addFour(6);
console.log(addFour, fourPlusSix);

function fullName(firstName: string, lastName?: string): string {
  if (lastName == null) return `${firstName}`;
  return `${firstName} ${lastName}`;
}
const kevs = fullName('Kevs');
console.log(kevs);

// Interfaces

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 3,
  // color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}
console.log(area(rect));

rect.toString = function () {
  return `Un rectángulo${this.color ? ` ${this.color}` : ''}`;
};
console.log(rect.toString());
