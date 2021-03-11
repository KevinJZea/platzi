const MIN = 1;
const MAX = 1000000000;
let number = 1024;
number = parseInt(number);
// const intNumber = Math.round();
console.log(number);

let space = [];
let count = 0;

// let arrayNumber = number.toString();

// arrayNumber.forEach((num) => {
//   if (num % number === 0) {
//     count++;
//   }
// });

while (number != 0) {
  if (number % 10 !== 0 && number % (number % 10) === 0) {
    count++;
  }
  number = number / 10;
  number = parseInt(number);
}

console.log(count);
