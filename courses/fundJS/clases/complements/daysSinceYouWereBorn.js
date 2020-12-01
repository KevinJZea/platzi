
function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24; // Milisegundos en un día
    const diferencia = Math.abs(fecha1 - fecha2); //Dará un número en milisegundos

    return Math.floor(diferencia / unDia);
}

const hoy = new Date(); // TIene la fecha actual por defecto

const nacimiento = new Date(1998, 11, 3); //Año Mes Día

diasEntreFechas(nacimiento, hoy);

