const letters = ["a", "b", "c"];

const newArray = letters.map((item) => item + "++");

/* const newArray = [];
 for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  newArray.push(element + "++");
} */

console.log("Original", letters);
console.log("Nuevo", newArray);
