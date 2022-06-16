/*

This week question is about QWERTY keyboard. 
Given a QWERTY keyboard grid and a remote control with arrows and a "select" button,
write a function that returns the buttons you have to press to type a certain word.
The cursor will always start in the upper left at the letter Q.

Example: 
$ remoteControl('car')
$ 'down, down, right, right, select, left, left, up, select, up, right, right, right, select'

*/

const findLetterPositionInKeyboard = (objective, keyboard) => {
  for (let rowIndex = 0; rowIndex < keyboard.length; rowIndex++) {
    const colIndex = keyboard[rowIndex].indexOf(objective);
    if (colIndex !== -1) return [rowIndex, colIndex];
  }
};

const handleDirections = (diff, direction1, direction2) => {
  const newMoves = [];
  while (diff !== 0) {
    diff > 0 ? newMoves.push(direction1) : newMoves.push(direction2);
    diff > 0 ? diff-- : diff++;
  }
  return newMoves;
};

const handleDirections2 = (diff, direction1, direction2) => {
  const newMoves = [];
  if (diff > 0) for (let i = 0; i < diff; i++) newMoves.push(direction1);
  if (diff < 0) for (let i = 0; i > diff; i--) newMoves.push(direction2);
  return newMoves;
};

const pushMovements = (diffRows, diffCols, rowFirst) => {
  const UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    SELECT = "select";

  if (rowFirst)
    return [
      handleDirections(diffRows, DOWN, UP),
      handleDirections(diffCols, RIGHT, LEFT),
      SELECT,
    ];

  return [
    handleDirections(diffCols, RIGHT, LEFT),
    handleDirections(diffRows, DOWN, UP),
    SELECT,
  ];
};

const handleNewMoves = (currentPosition, objectivePosition) => {
  const [currentRow, currentCol] = currentPosition,
    [objectiveRow, objectiveCol] = objectivePosition,
    diffRows = objectiveRow - currentRow,
    diffCols = objectiveCol - currentCol;
  let rowFirst = false;

  if (currentRow === 1 && objectiveCol === 9) rowFirst = true;
  if (currentRow === 2 && objectiveCol >= 7) rowFirst = true;

  return pushMovements(diffRows, diffCols, rowFirst);
};

const createMovementsArray = (strArray) => {
  const keyboard = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];
  let currentRow = 0,
    currentCol = 0;

  return strArray.map((letter) => {
    const [objectiveRow, objectiveCol] = findLetterPositionInKeyboard(
      letter,
      keyboard
    );
    const newMoves = handleNewMoves(
      [currentRow, currentCol],
      [objectiveRow, objectiveCol]
    );
    currentRow = objectiveRow;
    currentCol = objectiveCol;
    return newMoves;
  });
};

const validateCharactersOnStr = (str) => {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz";
  return [...str].every((letter) => validCharacters.includes(letter));
};

const validateStr = (str) => {
  // Validating str is a string
  if (typeof str !== "string")
    return console.warn(
      `Invalid data type: ${typeof str}. Only String is valid.`
    );

  if (str.length === 0) return console.warn("Empty string.");

  const validCharactersOnStr = validateCharactersOnStr(str);

  if (!validCharactersOnStr)
    return console.warn(
      "Invalid characters sent. Use the English alfabet only."
    );

  return true;
};

const remoteControl = (str) => {
  const isStrValid = validateStr(str);
  if (!isStrValid) return;

  // Creating movements array
  const movesArray = createMovementsArray([...str]);
  return movesArray.flat(2).join(", ");
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
