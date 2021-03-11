let text =
  "if man was meant to stay on the ground god would have given us roots";

let noSpaces = text.replace(/ /g, "");
let largo = noSpaces.length;

let strRoot = Math.sqrt(largo);

let base = Math.floor(strRoot);
let height = Math.ceil(strRoot);

console.log(largo, strRoot, base, height);

if (base * height < largo) {
  base = base + 1;

  matriz(base, height);
} else {
  matriz(base, height);
}

function matriz(base, height) {
  for (let i = 0; i < base; i++) {
    for (let j = 0; j < height; j++) {}
  }
}

// console.log(noSpaces);

// var re = /apples/gi;
// var str = "Apples are round, and apples are juicy.";
// var newstr = str.replace(re, "oranges");
// console.log(newstr);
