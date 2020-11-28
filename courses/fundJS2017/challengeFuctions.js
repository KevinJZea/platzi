
function CircleArea(radius) {
    return Math.PI * radius**2;
};

function RectangleArea(base, height) {
    return base * height;
};

function SquareArea(side) {
    return side**2;
};


const CircleAreaArrow = (radius) => Math.PI * radius**2;

const RectangleAreaArrow = (base, height) => base * height;

const SquareAreaArrow = (side) => side**2;


console.log(CircleArea(5), CircleAreaArrow(5));
console.log(RectangleArea(10, 3), RectangleAreaArrow(10, 3));
console.log(SquareArea(3), SquareAreaArrow(3));