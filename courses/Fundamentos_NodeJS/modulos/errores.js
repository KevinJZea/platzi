function otraFuncion() {
  return seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsync() {
  setTimeout(function() {
    try {
      return 3 + z;
    } catch(error) {
      console.error(error);
      console.log("Sí pasó");
    }
  }, 1000);
}

try {
  // otraFuncion();
  seRompeAsync();
} catch(error) {
  console.error("Algo se ha roto");
  console.error(error);
  console.log("Pero no pasa nada, lo hemos capturado");
}
// seRompe();

console.log("Esto va al final");