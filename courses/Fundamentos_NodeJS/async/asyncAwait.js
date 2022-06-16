async function hola(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}
    
function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log("Bla, bla, bla...");
      resolve(nombre);
      reject("Hay un error");
    }, 1000);
  });  
}
    
function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios,", nombre);
      resolve();
    }, 1000);
  })
}

async function main() {
  await hola("Kevs");
}

console.log("Empezamos proceso...");
main();
console.log("Proceso terminado");