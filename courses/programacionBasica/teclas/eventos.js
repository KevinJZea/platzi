var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujar_linea("red", x-1, y-1, x+1, y+1, papel);


function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;

  switch (evento.keyCode)
  {
    case teclas.DOWN:
      dibujar_linea(colorcito, x, y, x, y + movimiento, papel);
      y += movimiento;
    break;

    case teclas.UP:
      dibujar_linea(colorcito, x, y, x, y - movimiento, papel);
      y -= movimiento;
    break;

    case teclas.LEFT:
      dibujar_linea(colorcito, x, y, x - movimiento, y, papel);
      x -= movimiento;
    break;

    case teclas.RIGHT:
      dibujar_linea(colorcito, x, y, x + movimiento, y, papel);
      x += movimiento;
    break;

    default:
    break;
  }

}
