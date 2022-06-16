// Given a string s, you can transform every letter individually to be lowercase or uppercase.
// Return a list of all possible permutations you could create from s.

// capPermutations("ab35");
// ["abc35", "aB35", "Ab35", "AB35"]

// capPermutations("c96");
// ["c96", "C96"]

/* const capPermutations = (s) => {
  const list = [];

  const listS = [];

  for (let i = 0; i < s.length; i++) {
    listS.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    const low = s;
    low[i] = low[i].toLowerCase();

    const upp = [...s];
    upp[i] = upp[i].toUpperCase();
    console.log(low, upp);

    if (!list.includes(low)) list.push(low);
    if (!list.includes(upp)) list.push(upp);
    console.log(low, upp);
  }

//   const low = s;
//     low[i].toLowerCase();

//     const upp = s;
//     upp[i].toUpperCase(); 

  console.log(list);
  return list;
};

capPermutations("abc35");
capPermutations("ai4j35");
 */

const capPermutations = (s) => {


    
};

capPermutations("abc35");
capPermutations("ai4j35");

const le = "let";
const learr = [...le];
learr[0] = learr[0].toUpperCase();
const lejoined = learr.join("");

console.log(lejoined);
