// Create a function where you can delete elements of an array without using splice.

const deleteElementsOfAnArray = (arr, index, quant) => {
  // Handle errors
  if (index >= arr.length) {
    console.log("Index is out of range. Please try with a different value.");
    return undefined;
  } else if (index + quant > arr.length) {
    console.log("Quantity is out of range. Please try with a different value.");
    return undefined;
  }

  // Create copy of original array
  const newArr = [...arr];
  if (index === 0) {
    for (let i = 0; i < quant; i++) {
      newArr.shift();
    }
    return newArr;
  }

  const newArr2 = [];
  for (let i = 0; i < index; i++) {
    newArr2.push(newArr[i]);
  }
  for (let j = index + quant; j < newArr.length; j++) {
    newArr2.push(newArr[j]);
  }
  return newArr2;
};

const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rta = deleteElementsOfAnArray(original, 4, 6);
console.log("Original:", original); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("RTA:", rta); // [1, 2, 3, 4]
