console.log('Hora actual: ', new Date().toLocaleTimeString());

const timeOut = setTimeout(() => {
  console.log('Este mensaje aparece después de dos segundos');
  console.log('Hora actual: ', new Date().toLocaleTimeString());
}, 2000);

setImmediate(() => {
  console.log('Este mensaje aparece en la próxima iteración del bucle');
  console.log('Hora actual: ', new Date().toLocaleTimeString());
});

const intervalId = setInterval(() => {
  console.log('Este mensaje aparece cada tres segundos');
  console.log('Hora actual: ', new Date().toLocaleTimeString());
}, 3000);

setTimeout(() => {
  console.log('Cancelar el intervalo después de diez segundos');
  clearInterval(intervalId);
}, 10000);

const timeoutId = setTimeout(() => {
  console.log('Este mensaje nunca aparecerá');
}, 10000);

clearTimeout(timeoutId);

console.log('Hora final: ', new Date().toLocaleTimeString());
