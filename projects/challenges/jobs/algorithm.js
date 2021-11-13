const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const alphabetLength = alphabet.length;

// const isBeautifulString = (str) => {
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   let lettersCounter = 0;
//   let strLength = str.length;

//   for (let letter = 1; letter < alphabetLength; letter++) {
//     for (let a = 0; a < strLength; a++) {
//       if (alphabet[letter - 1] === str[a]) {
//         i++;
//       } else if (alphabet[letter] === str[a]) {
//         j++;
//       }
//     }

//     lettersCounter += i;

//     if (i >= j) {
//       if (k < i) {
//         k = i;
//       }
//     }

//     if (k < j) {
//       return "false", letter;
//     }

//     if (lettersCounter === strLength) {
//       return "true", letter;
//     }

//     i = 0;
//     j = 0;
//   }

//   return "true", "nada";
// };

/* ------------------------------------ */

// const isBeautifulString = (str) => {
//   let strLength = str.length;
//   let lettersCounter = 0;
//   let i = 0;
//   let j = 0;
//   let maxValue = 0;

//   for (let letter = 2; letter < alphabetLength; letter++) {
//     console.log(alphabet[letter]);
//     for (let strLetter = 1; strLetter < strLength; strLetter++) {
//       if (alphabet[letter - 2] === str[strLetter -1]) {
//         i++;
//         console.log("i", i, alphabet[letter - 2], str[strLetter - 1]);
//       }
//       if (alphabet[letter - 1] === str[strLetter - 1]) {
//         j++;
//         console.log("j", j, alphabet[letter - 1], str[strLetter - 1]);
//       }

//       if (strLetter === strLength) {
//         i++;
//       }
//     }

//     if (maxValue < i) {
//       maxValue = i;
//     }

//     if (maxValue < j) {
//       console.log("maxValue", maxValue, j);
//       return false;
//     }

//     lettersCounter += i;

//     if (lettersCounter === strLength) {
//       break;
//     }

//     i = 0;
//     j = 0;
//   }

//   return true;
// };

/* -------------------------------------- */

// const isBeautifulString = (str) => {
//   let strLength = str.length;
//   let lettersCounter = 0;
//   let pass = 0;
//   let i = 0;
//   let maxValue = 0;

//   for (let letter = 0; letter < alphabetLength; letter++) {
//     // console.log(alphabet[letter]);
//     for (let strLetter = 0; strLetter < strLength; strLetter++) {
//       // console.log(strLetter);
//       if (alphabet[letter] === str[strLetter]) {
//         i++;

//         // console.log(
//         //   "i",
//         //   i,
//         //   alphabet[letter],
//         //   str[strLetter],
//         //   strLetter + 1,
//         //   pass
//         // );
//       }

//       if (strLetter + 1 === strLength || i < 0) {
//         pass++;
//         // console.log("Entra a pass", pass);
//       }

//       if (pass === 1) {
//         maxValue = i;
//         // console.log("Entra a MAXVALUE", pass, i);
//         pass++;
//       }
//     }

//     if (maxValue < i) {
//       // console.log("maxValue", maxValue, i);
//       return false;
//     }

//     lettersCounter += i;

//     if (lettersCounter === strLength) {
//       break;
//     }

//     i = 0;
//   }

//   return true;
// };

/* -------------------------------------- */

const isBeautifulString = (str) => {
  const strLength = str.length;
  let lastLetter;

  for (let i = 0; i < alphabetLength; i += 1) {
    let letterCounter = 0;
    for (let j = 0; j < strLength; j += 1) {
      if (str[j] === alphabet[i]) {
        letterCounter += 1;
      }
    }

    if (letterCounter > 0) {
      if (letterCounter > lastLetter) {
        return false;
      }
      lastLetter = letterCounter;
    }
  }
  return true;
};

console.log(isBeautifulString("aaazz")); // T
console.log(isBeautifulString("Kevine")); // T

/* ---------- */
// console.log(isBeautifulString("aabbb")); // False
// console.log(isBeautifulString("aaabbb")); // True
// console.log(isBeautifulString("aazzz")); // F
// console.log(isBeautifulString("abecedario")); // F
// console.log(isBeautifulString("mucho")); // T

// console.log(isBeautifulString("nose")); // T
// console.log(isBeautifulString("clima")); // T
