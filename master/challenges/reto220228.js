/*

This week question is about letters 
Assign every lowercase letter a value, from 1 for a to 26 for z.
Given a string of lowercase letters, find the sum of the values of the letters in the string.

lettersum("") => 0
lettersum("a") => 1
lettersum("z") => 26
lettersum("cab") => 6
lettersum("excellent") => 100
lettersum("microspectrophotometries") => 317

*/

const validateWord = (word) => {
  if (typeof word !== "string")
    return console.warn(
      `Invalid data type: ${typeof strInput}. Only String is valid.`
    );

  const validLetters = "abcdefghijklmnopqrstuvwxyz";
  const wordArray = word.split("");

  const invalidCharactersOnWord = !wordArray.every((letter) =>
    validLetters.includes(letter)
  );

  if (invalidCharactersOnWord)
    return console.warn(
      "There are invalid characters in input. Please use the English alfabet only."
    );

  return true;
};

const lettersum = (word) => {
  const isWordValid = validateWord(word);
  if (!isWordValid) return;

  const startPoint = "`".charCodeAt(); // 96
  const reducer = (sum, letter) => sum + (letter.charCodeAt() - startPoint);

  return word.toLowerCase().split("").reduce(reducer, 0);
};

console.log(lettersum("cab"));
console.log(lettersum("excellent"));
console.log(lettersum("microspectrophotometries"));
