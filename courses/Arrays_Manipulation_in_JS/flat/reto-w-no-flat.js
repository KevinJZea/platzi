const matrix = [
  "Juejue",
  [1, 2, 3, [14, [15, 16, 17]]],
  [4, 5, 6, [10, 11, [12, 13]]],
  [7, 8, 9],
];

const checkArray = (arr) => {
  const newArray = [];
  arr.forEach((el) => {
    if (Array.isArray(el) && el.length > 0) {
      checkArray(el);
    } else {
      newArray.push(el);
    }
  });
  return newArray;
};
checkArray(matrix);

console.log(newArray);
