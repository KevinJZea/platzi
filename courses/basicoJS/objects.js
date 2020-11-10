var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
};

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};