/*

This week question is about odious numbers 0 1. 
An "odious number" is a non-negative number with an odd number of 1s in its binary expansion. Write a function that returns true if a given number is odious.
Example: 
$ isOdious(14)
$ true
$ isOdious(5)
$ false

*/

const isOdious = (num) => {
  if (!(typeof num === "number" || typeof num === "string"))
    return console.warn(
      `${typeof num} was sent. Please send a non-negative number.`
    );

  if (typeof num === "string") {
    const acceptedChars = "0123456789+-";

    const charsAreAccepted = num
      .split("")
      .every((substr) => acceptedChars.includes(substr));
    if (!charsAreAccepted)
      return console.warn(
        `A string with characters different than numbers and with "${num}" as value was sent. Send a number.`
      );

    num = parseInt(num);
    console.warn(
      `Watch out! A string with "${num}" as value was sent. A number is preferable. But since this is a pro code, it will work anyway.`
    );
  }

  if (num < 0)
    return console.warn(
      `This function only works with non-negative numbers and ${num} was sent.`
    );
  if (num === 0) return false;

  // Function to convert decimal into binary. Returns a string.
  const decimalToBinary = (decimal) => (decimal >>> 0).toString(2);

  const amountOfOnes = decimalToBinary(num)
    .split("")
    .reduce((numOfOnes, binaryDigit) => {
      return binaryDigit === "1" ? numOfOnes + 1 : numOfOnes;
    }, 0);
  // Explicit return to make it more readable.

  const amountOfOnesIsOdd = amountOfOnes % 2 ? false : true;
  // If amountOfOnes % 2 === 1 -> no odd, then: false

  return amountOfOnesIsOdd;
};

console.log(isOdious(8));
/* console.log(isOdious(undefined));
console.log(isOdious({}));
console.log(isOdious([]));
console.log(isOdious("JAjaja")); */

/* console.log(isOdious(0));
console.log(isOdious(1));
console.log(isOdious(3));
console.log(isOdious(10));
console.log(isOdious(127));
console.log(isOdious(128)); */
