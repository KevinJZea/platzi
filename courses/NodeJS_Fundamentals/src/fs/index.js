const fs = require('fs');

const fileName = 'example.txt';

// CREAR

fs.writeFileSync(fileName, 'Hola! Este es un archivo de ejemplo');
console.log('Archivo creado correctamente');

// LEER

const content = fs.readFileSync(fileName, 'utf-8');
console.log('File content: ', content);

// ACTUALIZAR

fs.appendFileSync(fileName, '\n\nEsta es una nueva línea\n');
console.log('Archivo actualizado correctamente');

// ELIMINAR

fs.unlinkSync(fileName);
console.log('Archivo eliminado correctamente');
