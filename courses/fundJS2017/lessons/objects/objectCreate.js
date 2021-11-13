function Punto(x, y) {
  this.x = x;
  this.y = y;
}

Punto.prototype.moverEnX = function moverEnX(x) {
  this.x += x;
};

Punto.prototype.moverEnY = function moverEnY(y) {
  this.y += y;
};

Punto.prototype.distancia = function distancia(p) {
  const x = this.x - p.x;
  const y = this.y - p.y;

  return Math.sqrt(x * x + y * y);
};

function distance(p1, p2) {
  const x = p1.x - p2.x;
  const y = p1.y - p2.y;

  return Math.sqrt(x * x + y * y);
}

const Point = {
  init(x, y) {
    this.x = x;
    this.y = y;
  },
  moverEnX(x) {
    this.x += x;
  },
  moverEnY(y) {
    this.y += y;
  },
  distancia(p) {
    const x = this.x - p.x;
    const y = this.y - p.y;

    return Math.sqrt(x * x + y * y);
  },
};

const p1 = new Punto(0, 4);

const p2 = new Punto(3, 0);

const p3 = Object.create(Point);
p3.init(0, 4);

const p4 = Object.create(Point);
p4.init(3, 0);

console.log(distance(p1, p2));
console.log(p1.distancia(p2));

console.log(distance(p3, p4));
console.log(p3.distancia(p4));

console.log(distance(p3, p1));
console.log(p3.distancia(p1));
