/* 

Given an array of integers,
calculate the ratios of its elements that are positive,
negative, and zero.
Print the decimal value of each fraction on a new line with
6 places after the decimal.

Note: This challenge introduces precision problems.
The test cases are scaled to six decimal places,
though answers with absolute error of up to  are acceptable.

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  const length = arr.length;
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  for (let i = 0; i < length; i++) {
    if (arr[i] < 0) {
      negatives += 1;
    } else if (arr[i] > 0) {
      positives += 1;
    } else {
      zeros += 1;
    }
  }

  let posRatio = positives / length;
  let negRatio = negatives / length;
  let zeroRatio = zeros / length;

  posRatio = posRatio.toFixed(6);
  negRatio = negRatio.toFixed(6);
  zeroRatio = zeroRatio.toFixed(6);

  console.log(posRatio);
  console.log(negRatio);
  console.log(zeroRatio);
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
