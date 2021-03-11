/*

There will be two arrays of integers.
Determine all integers that satisfy the following two conditions:

1. The elements of the first array are all factors of the integer being considered.
2. The integer being considered is a factor of all elements of the second array.

These numbers are referred to as being between the two arrays.
Determine how many such numbers exist.


*/

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here

  const lengthA = a.length;
  const lengthB = b.length;
  const init = a[lengthA - 1];
  const end = b[0];
  const numbers = [];
  const arrNumbers = [];
  const range = [];
  let counter = 0;

  for (let i = init; i <= end; i++) {
    range.push(i);
  }

  const lengthRange = range.length;

  for (let j = 0; j < lengthRange; j++) {
    counter = 0;
    for (let k = 0; k < lengthA; k++) {
      if (range[j] % a[k] === 0) {
        counter += 1;

        if (counter === lengthA) {
          arrNumbers.push(range[j]);
        }
      }
    }
  }

  const lengthArrNumbers = arrNumbers.length;

  for (let l = 0; l < lengthArrNumbers; l++) {
    counter = 0;
    for (let m = 0; m < lengthB; m++) {
      if (b[m] % arrNumbers[l] === 0) {
        counter += 1;

        if (counter === lengthB) {
          numbers.push(arrNumbers[l]);
        }
      }
    }
  }

  const totalNumbers = numbers.length;
  return totalNumbers;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const brr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((brrTemp) => parseInt(brrTemp, 10));

  const total = getTotalX(arr, brr);

  ws.write(total + "\n");

  ws.end();
}
