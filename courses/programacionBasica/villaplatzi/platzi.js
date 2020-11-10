var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

var cantidad = aleatorio(0, 10);
var x = 250-40;
var y = 250-40;

function dibujar()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOK)
  {
    for (v = 0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  x = 250-40;
  y = 250-40;
  if (cerdo.cargaOK)
  {
    // x = 250-40;
    // y = 250-40;
    papel.drawImage(cerdo.imagen, x, y);
  }

  if (pollo.cargaOK)
  {
    for (p = 0; p < cantidad; p++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}


function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

//////////////////////////////
//////////////////////////////

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

document.addEventListener("keyup", moverCerdo);
//var cuadrito = document.getElementById("area_de_dibujo");
//var papel = cuadrito.getContext("2d");
// var x = 250-40;
// var y = 250-40;

//moverAnimal(x-1, y-1, x+1, y+1, papel);


function moverAnimal(xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.moveTo(xinicial, yinicial);
  lienzo.moveTo(xfinal, yfinal);
  //lienzo.stroke();
  lienzo.closePath();
}



function moverCerdo(evento)
{

  var movimiento = 10;

  switch (evento.keyCode)
  {
    case teclas.DOWN:
      // moverAnimal(x, y, x, y + movimiento, papel);
      y += movimiento;
      dibujar(x, y);
      //papel.drawImage(cerdo.imagen, x, y);
    break;

    case teclas.UP:
      y -= movimiento;
      dibujar(x, y);

      // papel.drawImage(cerdo.imagen, x, y);
    break;

    case teclas.LEFT:
      // moverAnimal(x, y, x - movimiento, y, papel);
      x -= movimiento;
      dibujar(x, y);
      // papel.drawImage(cerdo.imagen, x, y);
    break;

    case teclas.RIGHT:
      // moverAnimal(x, y, x + movimiento, y, papel);
      x += movimiento;
      dibujar(x, y);
      // papel.drawImage(cerdo.imagen, x, y);
    break;

    default:
    break;
  }
}
