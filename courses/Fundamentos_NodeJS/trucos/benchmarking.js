console.time("todo");
let suma = 0;
console.time("bucle");
for (let i = 0; i < 10000000; i++) {
  suma++;
}

console.log(suma);
console.timeEnd("bucle");

// ---

console.time("asincrona");
console.log("Empieza proceso asíncrono");
asincrona()
  .then(() => {
    console.timeEnd("asincrona");
  });

// ---

let suma2 = 0;
console.time("bucle2");
for (let j = 0; j < 10000000; j++) {
  suma2++;
}

console.log(suma2);
console.timeEnd("bucle2");
console.timeEnd("todo");

// ---

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Terminó el proceso asíncrono");
      resolve();
    });
  });
}