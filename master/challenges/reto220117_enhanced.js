const wordleGuess = (word = "", solutionWord = "") => {
  // Validation
  if (typeof word !== "string") {
    return `Your guess must be a string.`;
  } else if (word.length !== solutionWord.length) {
    return `Your guess must be ${solutionWord.length} letters long.`;
  }

  solutionWord = solutionWord.toLowerCase();
  word = word.toLowerCase();

  const arrSolutionWord = [...solutionWord];
  const arrWord = [...word];
  const answer = [];

  for (let i = 0; i < arrWord.length; i++) {
    const letter = arrWord[i];
    if (arrSolutionWord.includes(letter)) {
      if (letter === arrSolutionWord[i]) {
        answer.push("🟢");
      } else {
        answer.push("🟡");
      }
    } else {
      answer.push("⚫️");
    }
  }

  const strAnswer = answer.join("");
  return strAnswer;
};

/* const solutionWord = "fudge";
console.log(wordleGuess("lodge", solutionWord));
console.log(wordleGuess("reads", solutionWord));
console.log(wordleGuess("hellos", solutionWord));
console.log(wordleGuess(true, solutionWord));
console.log(wordleGuess("fgdue", solutionWord)); */

const validateWord = (word, solutionWord) => {
  // Validation
  if (typeof word !== "string")
    return console.warn(`Your guess must be a string.`);

  if (word.length !== solutionWord.length)
    return console.warn(
      `Your guess must be ${solutionWord.length} letters long.`
    );

  return true;
};

const wordleGuessMap = (word, solutionWord) => {
  const isWordValid = validateWord(word, solutionWord);
  if (!isWordValid) return;

  const solutionWordArray = [...solutionWord.toLowerCase()];
  const answer = [...word.toLowerCase()].reduce((accum, letter, index) => {
    if (!solutionWordArray.includes(letter)) return `${accum}⚫️`;
    if (letter !== solutionWordArray[index]) return `${accum}🟡`;
    return `${accum}🟢`;
  }, "");

  return answer;
};

const solutionWordMap = "fudge";
console.log(wordleGuessMap("lodge", solutionWordMap));
console.log(wordleGuessMap("reads", solutionWordMap));
console.log(wordleGuessMap("hellos", solutionWordMap));
console.log(wordleGuessMap(true, solutionWordMap));
console.log(wordleGuessMap("fgdue", solutionWordMap));

const names = "Kevs";
const ages = 23;

function template(strings, ...values) {
  console.log(strings);
  console.log(values);
}

template`My name is ${names} and my age is ${ages}`;

// Optional chaining (?.)

const kevs = {
  name: "Kevs",
  age: 23,
  address: {
    street: "Cerro del Topochico",
    zipCode: 67190,
    getStreet: function () {
      return this.street;
    },
  },
};

console.log(kevs?.address?.zipCode);
console.log(kevs?.address?.getStreet?.());

// Nullish coalescing operator (??)
const discount = 0;
console.log(discount || 10);
console.log(discount ?? 10);
