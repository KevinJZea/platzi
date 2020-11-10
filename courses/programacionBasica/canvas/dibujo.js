var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var espacio = ancho / lineas;
  var colorcito = "#FAA";

  for (l=0; l<lineas; l++)
  {
    dibujar_linea(colorcito, 0, espacio*l, espacio*(l+1), 300);
    dibujar_linea(colorcito, 300, 300-(espacio*l), 290-(espacio*l), 0);
    dibujar_linea(colorcito, espacio*l, 300, 300, 290-(espacio*l));
    dibujar_linea(colorcito, 300-(espacio*l), 0, 0, espacio*(l+1));
  }

  dibujar_linea(colorcito, 1, 1, 1, 300);
  dibujar_linea(colorcito, 1, 299, 299, 299);
}
