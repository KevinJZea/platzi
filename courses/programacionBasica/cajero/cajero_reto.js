

class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}


function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor*papeles);

    }

  }

  if (dinero > 0)
  {
    resultado.innerHTML = "No puedo darte esa cantidad :(";
  }
  else
  {

    for (var e of entregado)
    {
      if (e.cantidad > 0)
      {
        resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
      }

    }

  }

  total_en_cajero -= dinero;
}


var caja = [];
var entregado = [];
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 2) );

var total_en_cajero = 0;
for (var bill of caja)
{
  total_en_cajero += (bill.valor * bill.cantidad);
}

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
