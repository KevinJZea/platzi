function typeOfElement(element) {
  switch (Object.prototype.toString.call(element)) {
    case "[object Object]":
      return "object";
    case "[object Array]":
      return "array";
    default:
      return "Does not matter";
  }
}

function deepCopy(element) {
  let elementType = typeOfElement(element);
  if (elementType !== "array" && elementType !== "object") return element;

  let copy;
  if (elementType === "array") copy = [];
  if (elementType === "object") copy = {};

  for (let item in element) {
    copy[item] = deepCopy(element[item]);
  }

  return copy;
}

const test = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    arr: [
      18,
      null,
      undefined,
      {
        prueba: "test",
        func() {
          this.prueba = "No test";
        },
      },
    ],
  },
  e: [
    "f",
    "g",
    {
      h: "h",
      getH() {
        return this.h;
      },
    },
  ],
  otro: [[[{}]]],
  editA() {
    this.a = "AAAAA";
  },
};
const rta = deepCopy(test);
console.log(rta);
