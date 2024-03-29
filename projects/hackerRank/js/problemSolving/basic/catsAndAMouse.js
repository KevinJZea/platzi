/*

Two cats and a mouse are at various positions on a line.
You will be given their starting positions.
Your task is to determine which cat will reach the mouse first,
assuming the mouse does not move and the cats travel at equal speed.
If the cats arrive at the same time,
the mouse will be allowed to move and it will escape while they fight.

You are given q queries in the form of x, y, and z
representing the respective positions for cats A and B,
and for mouse C.

Complete the function catAndMouse to return
the appropriate answer to each query,
which will be printed on a new line.

- If cat A catches the mouse first, print Cat A.
- If cat B catches the mouse first, print Cat B.
- If both cats reach the mouse at the same time,
print Mouse C as the two cats fight and mouse escapes.


*/

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const dBetweenCatAandMouse = Math.abs(x - z);
  const dBetweenCatBandMouse = Math.abs(y - z);

  if (dBetweenCatAandMouse > dBetweenCatBandMouse) {
    return "Cat B";
  } else if (dBetweenCatBandMouse === dBetweenCatAandMouse) {
    return "Mouse C";
  } else {
    return "Cat A";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const xyz = readLine().split(" ");

    const x = parseInt(xyz[0], 10);

    const y = parseInt(xyz[1], 10);

    const z = parseInt(xyz[2], 10);

    let result = catAndMouse(x, y, z);

    ws.write(result + "\n");
  }

  ws.end();
}
