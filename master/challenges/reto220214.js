/*

This week question is about QWERTY keyboard. 
Given a QWERTY keyboard grid and a remote control with arrows and a "select" button,
write a function that returns the buttons you have to press to type a certain word.
The cursor will always start in the upper left at the letter Q.

Example: 
$ remoteControl('car')
$ 'down, down, right, right, select, left, left, up, select, up, right, right, right, select'

*/

const findPositionInKeyboard = (objective, keyboard) => {
  for (let rowIndex = 0; rowIndex < keyboard.length; rowIndex++) {
    const colIndex = keyboard[rowIndex].indexOf(objective);
    if (colIndex !== -1) return [rowIndex, colIndex];
  }
};

const handleDirections = (diff, direction1, direction2, newMoves) => {
  while (diff !== 0) {
    diff > 0 ? newMoves.push(direction1) : newMoves.push(direction2);
    diff > 0 ? diff-- : diff++;
  }
};

const pushMovements = (rowFirst, diffRows, diffCols) => {
  const UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    SELECT = "select",
    newMoves = [];

  if (rowFirst) {
    handleDirections(diffRows, DOWN, UP, newMoves);
    handleDirections(diffCols, RIGHT, LEFT, newMoves);
  } else {
    handleDirections(diffCols, RIGHT, LEFT, newMoves);
    handleDirections(diffRows, DOWN, UP, newMoves);
  }
  newMoves.push(SELECT);
  return newMoves;
};

const handleNewMoves = (currentPosition, objectivePosition) => {
  const [currentRow, currentCol] = currentPosition,
    [objectiveRow, objectiveCol] = objectivePosition;

  let diffRows = objectiveRow - currentRow,
    diffCols = objectiveCol - currentCol,
    rowFirst;

  if (currentRow === 1 && objectiveCol === 9) rowFirst = true;
  if (currentRow === 2 && objectiveCol >= 7) rowFirst = true;

  return pushMovements(rowFirst, diffRows, diffCols);
};

const remoteControl = (strInput) => {
  if (typeof strInput !== "string")
    return console.warn(
      `Invalid data type: ${typeof strInput}. Only String is valid.`
    );
  if (strInput.length === 0) return console.warn("Empty string.");

  const validLetters = "abcdefghijklmnopqrstuvwxyz";
  const strInputArray = strInput.split("");

  const invalidCharactersOnStr = !strInputArray.every((letter) =>
    validLetters.includes(letter)
  );

  if (invalidCharactersOnStr)
    return console.warn(
      "There are invalid characters in input. Please use the English alfabet only."
    );

  const keyboard = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  let currentRow = 0,
    currentCol = 0;

  const movesArray = strInputArray.reduce((accum, letter) => {
    const [objectiveRow, objectiveCol] = findPositionInKeyboard(
      letter,
      keyboard
    );
    const newMoves = handleNewMoves(
      [currentRow, currentCol],
      [objectiveRow, objectiveCol]
    );
    currentRow = objectiveRow;
    currentCol = objectiveCol;
    return [...accum, newMoves];
  }, []);
  const movesString = movesArray.flat().join(", ");

  return movesString;
};

console.log(remoteControl("calm"));

/* 

console.log(0 && undefined);
console.log(0 || undefined);
console.log(0 === false);

const letters = ["a", "b", "c"];
const { 2: letter } = letters;
const [a, b, c, d] = letters;
console.log(letter);
console.log(a, b, c, d);

const fragen = { asu: "ASU", medio: "MEDIO" };
const { medio } = fragen;
const { asu: medio2 } = fragen;
console.log(medio);

*/
