// var teclas = {
//   LEFT: 37,
//   UP: 38,
//   RIGHT: 39,
//   DOWN: 40
// };
//
// document.addEventListener("mousedown", dibujarTeclado);
// var cuadrito = document.getElementById("area_de_dibujo");
// var papel = cuadrito.getContext("2d");
// var x = 100;
// var y = 100;
//
// dibujar_linea("red", x-1, y-1, x+1, y+1, papel);
//
//
// function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
// {
//   lienzo.beginPath();
//   lienzo.strokeStyle = color;
//   lienzo.lineWidth = 3;
//   lienzo.moveTo(xinicial, yinicial);
//   lienzo.lineTo(xfinal, yfinal);
//   lienzo.stroke();
//   lienzo.closePath();
// }
//
//
// function dibujarTeclado(evento)
// {
//   var colorcito = "blue";
//   var movimiento = 10;
//
//   switch (evento.keyCode)
//   {
//     case teclas.DOWN:
//       dibujar_linea(colorcito, x, y, x, y + movimiento, papel);
//       y += movimiento;
//     break;
//
//     case teclas.UP:
//       dibujar_linea(colorcito, x, y, x, y - movimiento, papel);
//       y -= movimiento;
//     break;
//
//     case teclas.LEFT:
//       dibujar_linea(colorcito, x, y, x - movimiento, y, papel);
//       x -= movimiento;
//     break;
//
//     case teclas.RIGHT:
//       dibujar_linea(colorcito, x, y, x + movimiento, y, papel);
//       x += movimiento;
//     break;
//
//     default:
//     break;
//   }
//
// }


var estado = 0;          // estado del click
var colorLinea = "blue";    // color a la linea

var area = document.getElementById("area_de_dibujo");
var papel = area.getContext("2d");
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// dibujo del borde
dibujarLinea("red", 0, 0, 300, 0, papel);
dibujarLinea("red", 300, 0, 300, 300, papel);
dibujarLinea("red", 300, 300, 0, 300, papel);
dibujarLinea("red", 0, 300, 0, 0, papel);

// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();
}
