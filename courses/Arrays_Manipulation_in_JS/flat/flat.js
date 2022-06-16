const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matrix.length; i++) {
  const element = matrix[i];
  for (let j = 0; j < element.length; j++) {
    const element2 = element[j];
    newArray.push(element2);
  }
}
console.log("For", newArray);

const rta = matrix.flat();

console.log("Flat", rta);
