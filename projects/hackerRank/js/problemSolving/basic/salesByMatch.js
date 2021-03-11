/*

There is a large pile of socks that must be paired by color.
Given an array of integers representing the color of each sock,
determine how many pairs of socks with matching colors there are.

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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  // let numOfPairs = 0;
  // let places = [];

  // for (let i = 0; i < n; i++) {
  //     console.log(`i = ${i}`);

  //     if (places.length === 0) {
  //         for (let j = i + 1; j < n; j++) {
  //             console.log(`j = ${j}`);

  //             if (j === places.length) {
  //                 break;
  //             } else if (ar[i] === ar[j]) {
  //                 console.log(`Break`);
  //                 numOfPairs += 1;
  //                 places.push(j);
  //                 break;
  //             }

  //         }
  //     } else if (places.length > 0) {
  //         console.log("ENtra")
  //     }

  // }

  // return numOfPairs;

  let numOfPairs = 0;
  let nums = [[ar[0]]];
  let counter = 0;

  for (let i = 1; i < n; i++) {
    counter = 0;

    for (let j = 0; j < nums.length; j++) {
      console.log(i, j, nums.length);
      if (ar[i] === nums[j][0]) {
        nums[j].push(ar[i]);
        break;
      } else if (ar[i] !== nums[j][0]) {
        counter++;
      }

      if (counter === nums.length) {
        nums.push([ar[i]]);
        break;
      }
    }
    console.log(i, nums);
  }

  for (let m = 0; m < nums.length; m++) {
    if (nums[m].length > 1) {
      numOfPairs += Math.floor(nums[m].length / 2);
    }
  }

  console.log(nums);
  return numOfPairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
