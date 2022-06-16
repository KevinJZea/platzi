// Create a function that modifies an array without affecting the original one.

const modifyArray = (arr, changes) => {
  console.log(Object.values(changes));
  if (!Array.isArray(arr)) {
    console.log(
      "The first element is not an array. Please make sure you are sending an array as first argument."
    );
  } else if (!Object.values(changes)) {
    console.log(
      "The second element is not an object.\nPlease make sure you are sending an object with values as second argument."
    );
  }
};

console.log(modifyArray([], "arr"));
