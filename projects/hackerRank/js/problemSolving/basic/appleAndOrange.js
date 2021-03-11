/*

Sam's house has an apple tree and an orange tree
that yield an abundance of fruit.
Using the information given below,
determine the number of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where s is the start point,
and t is the endpoint.

The apple tree is to the left of the house,
and the orange tree is to its right.

Assume the trees are located on a single point,
where the apple tree is at point a, and the orange tree is at point b.

When a fruit falls from its tree,
it lands d units of distance from its tree of origin along the -axis.
*A negative value of d means the fruit fell d units to the tree's left,
and a positive value of d means it falls d units to the tree's right. *


Given the value of d for m apples and n oranges,
determine how many apples and oranges will fall on Sam's house
(i.e., in the inclusive range [s,t])?

*/

"use strict";

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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesLength = apples.length;
  const orangesLength = oranges.length;
  const house = [];
  let applesAtHouse = 0;
  let orangesAtHouse = 0;

  // for (let i = s; i <= t; i++) {
  //     house.push(i);
  // }

  for (let i = 0; i < applesLength; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      applesAtHouse += 1;
    }
  }

  // for (let i = 0; i < applesLength; i++) {

  //     if (house.includes(apples[i] + a)) {
  //         applesAtHouse += 1;
  //     }

  // }

  for (let i = 0; i < orangesLength; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      orangesAtHouse += 1;
    }
  }

  // for (let i = 0; i < orangesLength; i++) {

  //     if (house.includes(oranges[i] + b)) {
  //         orangesAtHouse += 1;
  //     }

  // }

  console.log(applesAtHouse);
  console.log(orangesAtHouse);
}

function main() {
  const st = readLine().split(" ");

  const s = parseInt(st[0], 10);

  const t = parseInt(st[1], 10);

  const ab = readLine().split(" ");

  const a = parseInt(ab[0], 10);

  const b = parseInt(ab[1], 10);

  const mn = readLine().split(" ");

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const apples = readLine()
    .split(" ")
    .map((applesTemp) => parseInt(applesTemp, 10));

  const oranges = readLine()
    .split(" ")
    .map((orangesTemp) => parseInt(orangesTemp, 10));

  countApplesAndOranges(s, t, a, b, apples, oranges);
}
