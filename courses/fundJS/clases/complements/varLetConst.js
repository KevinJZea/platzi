
var kevs = {
    nombre: 'Kevs',
    apellido: 'Zea',
    edad: 21,
}

function esMayorDeEdad(persona) {
    if (persona.edad > 18) {
        var mensaje = 'Es mayor de edad';
    } else {
        var mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

esMayorDeEdad(kevs);


