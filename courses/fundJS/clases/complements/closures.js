


function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`);
    }
}


const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('wey');
const saludoColombiano = crearSaludo('parce');

saludoArgentino('Facundo'); // Hola Facundo che
saludoMexicano('Kevs'); // Hola Kevs wey
saludoColombiano('Freddy'); // Hola Freddy parce

