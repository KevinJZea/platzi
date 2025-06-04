const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream('input.txt', { encoding: 'utf8' });
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', (chunk) => {
  console.log(`Chunk: ${chunk}`);
  writableStream.write(chunk);
});

readableStream.on('end', () => {
  console.log(`Terminó la lectura del archivo`);
  writableStream.end();
});

readableStream.on('error', (error) => {
  console.log(`Error de lectura del archivo: ${error}`);
});

writableStream.on('error', (error) => {
  console.log(`Error en la escritura del archivo: ${error}`);
});

/* 
function createInputFile() {
  let content = '';

  console.time('p');
  for (let i = 0; i < 1000000; i++) {
    content += `El número actual es ${i}.\n`;
  }
  console.timeEnd('p');

  fs.writeFileSync(path.join(__dirname, 'input.txt'), content, 'utf8');
}
createInputFile();
 */
