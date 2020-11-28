
// https://platzi.com/comunidad/platzicodingchallenge-dia-2-area-de-un-triangulo/

function TriangleArea(base, height) {
    return base * height / 2;
};

const TriangleAreaArrow = (base, height) => base * height / 2;

let b = 2;
let h = 5;
console.log(TriangleArea(b, h));
console.log(TriangleAreaArrow(b, h));
