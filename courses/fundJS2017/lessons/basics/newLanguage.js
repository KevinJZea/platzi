/* WELCOME TO PLATZOM 

If a word ends with -ar, both letters will be removed.

If a word starts with Z, -pe will be added at the end of the word.

If the translated word has more than 10 letters, it will be divided in 2 and be linked by a middle dash.

If the original word is a palindrome, none of the rules above will be applied, but the word must intercalated between capital letters and lower case.

*/

function platzom(str) {
  str = str.toLowerCase();
  let translation = str;

  if (str.endsWith("ar")) {
    translation = str.slice(0, -2);
  }

  if (str.startsWith("z")) {
    translation = `${translation}pe`;
  }

  const length = translation.length;
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2));
    const secondHalf = translation.slice(Math.round(length / 2));

    translation = `${firstHalf}-${secondHalf}`;
  }

  const reverse = (str) => str.split("").reverse().join("");

  function minMay(str) {
    const length = str.length;
    let translation = "";
    let capitalize = true;

    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);

      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    console.log(translation);
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  console.log(translation);
}

platzom("Zarpar");
platzom("Abecedario");
platzom("Sometemos");
