console.log(`ID del Proceso (PID): ${process.pid}`);
console.log(`Directorio actual: ${process.cwd()}`);
console.log(`Versión de Node: ${process.version}`);
console.log('Plataforma: ', process.platform);
console.log('Arquitectura: ', process.arch);
console.log(`Tiempo de ejecución: ${process.uptime()} segundos\n`);

console.log(process.env);
console.log('Path: ', process.env.PATH);
console.log('User Profile: ', process.env.HOME || process.env.USERPROFILE);
console.log('NODE_ENV: ', process.env.NODE_ENV || 'No definido');

const memoryUsage = process.memoryUsage();
console.log(memoryUsage);

process.on('exit', (code) => console.log('Proceso terminado. ', code));
process.on('SIGINT', () => {
  console.log('Se recibió la señal de interrupción. ');
  process.exit(0);
});

console.log('Escribe algo y presiona Enter o CTRL + C para salir');
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input.toLocaleLowerCase() === 'salir') {
    console.log('Comando de salida recibido');
    process.exit(0);
  } else {
    console.log('Mensaje ', input);
    console.log("Escribe 'Salir' para terminar o escribe algo más");
  }
});
