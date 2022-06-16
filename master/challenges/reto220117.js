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

const wordleGuessMap = (word = "", solutionWord = "") => {
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
  const answer = arrWord
    .map((letter, index) => {
      if (!arrSolutionWord.includes(letter)) return "⚫️";
      if (letter !== arrSolutionWord[index]) return "🟡";
      return "🟢";
    })
    .join("");

  return answer;
};

const solutionWordMap = "fudge";
console.log(wordleGuessMap("lodge", solutionWordMap));
console.log(wordleGuessMap("reads", solutionWordMap));
console.log(wordleGuessMap("hellos", solutionWordMap));
console.log(wordleGuessMap(true, solutionWordMap));
console.log(wordleGuessMap("fgdue", solutionWordMap));
