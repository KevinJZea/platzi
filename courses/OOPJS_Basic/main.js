const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.aprobarCurso("Curso de Fundamentos de Ingeniería de Software");
natalia.aprobarCurso("Curso de CSS Grid");

console.log(natalia);

// ----- || -----

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  /* this.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }; */
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student("Juanita Alejandra", 15, [
  "Curso de Introducción a la Producción de Videojuegos",
  "Curso de Creación de Personajes",
]);

// Prototipos con la sintaxis de clases

class Student2 {
  constructor({ name, age, cursosAprobados }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  cursosAprobados: [
    "Curso de Análisis de Negocios para Ciencias de Datos",
    "Curso de Principios de Visualización de Datos para BI",
  ],
});

miguelito.aprobarCurso("Curso de Tableau");

console.table(Student2);
