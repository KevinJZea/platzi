
// const process = require("process");

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("El proceso acabó");
});

process.on("uncaughtException", (error, origin) => {
  console.error("Vaya, se nos olvidó capturar un error: ");
  console.error(error);
});

funcionQueNoExiste();

console.log("Esto si el error no se recoge, no sale");