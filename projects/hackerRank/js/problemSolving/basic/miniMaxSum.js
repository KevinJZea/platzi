/* Given five positive integers,
find the minimum and maximum values that can be
calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values
as a single line of two space-separated long integers.
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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const length = arr.length;

  let firstNum = arr[0];
  let secondNum = arr[1];
  let thirdNum = arr[2];
  let fourthNum = arr[3];
  let fifthNum = arr[4];
  let totalSum = firstNum + secondNum + thirdNum + fourthNum + fifthNum;
  let sum = 0;
  let maxSum = 0;
  let minSum = totalSum;

  for (let i = 0; i < length; i++) {
    sum = totalSum - arr[i];

    if (sum > maxSum) {
      maxSum = sum;
    }

    if (sum < minSum) {
      minSum = sum;
    }
  }

  const result = minSum + " " + maxSum;
  console.log(result);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
