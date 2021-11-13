/*

A person wants to determine the most expensive computer
keyboard and USB drive that can be purchased with a give budget.
Given price lists for keyboards and USB drives and a budget,
find the cost to buy them.
If it is not possible to buy both items, return -1.


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
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */

  let maxPrice = -1;
  let sum = 0;
  const keyLength = keyboards.length;
  const drivesLength = drives.length;

  for (let i = 0; i < keyLength; i++) {
    for (let j = 0; j < drivesLength; j++) {
      sum = keyboards[i] + drives[j];

      if (sum > maxPrice && sum <= b) {
        maxPrice = sum;

        if (maxPrice === b) {
          break;
        }
      }
    }
  }

  return maxPrice;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const bnm = readLine().split(" ");

  const b = parseInt(bnm[0], 10);

  const n = parseInt(bnm[1], 10);

  const m = parseInt(bnm[2], 10);

  const keyboards = readLine()
    .split(" ")
    .map((keyboardsTemp) => parseInt(keyboardsTemp, 10));

  const drives = readLine()
    .split(" ")
    .map((drivesTemp) => parseInt(drivesTemp, 10));

  /*
   * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
   */

  let moneySpent = getMoneySpent(keyboards, drives, b);

  ws.write(moneySpent + "\n");

  ws.end();
}
