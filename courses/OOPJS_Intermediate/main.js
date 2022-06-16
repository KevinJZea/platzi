/* class Patito {
  static sonidito() {
    return "cuac";
  }
}

console.log(Patito.sonidito()); */

const kevs = {
  name: "Kevs",
  age: 23,
  approvedCourses: ["Curso1"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

// const result = Object.getOwnPropertyDescriptors(kevs);
// console.log(result);

Object.defineProperty(kevs, "pruebaNasa", {
  value: "Extraterrestres",
  writable: false,
  enumerable: false,
  configurable: false,
});
Object.defineProperty(kevs, "navigator", {
  value: "Chrome",
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(kevs, "editor", {
  value: "VSCode",
  writable: false,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(kevs, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false,
});

console.log(kevs);
console.log(Object.getOwnPropertyDescriptors(kevs));
console.log(
  Object.getOwnPropertyDescriptors(Object.getOwnPropertyDescriptors(kevs))
);
