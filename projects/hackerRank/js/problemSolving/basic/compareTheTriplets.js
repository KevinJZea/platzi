/*

Alice and Bob each created one problem for HackerRank.
A reviewer rates the two challenges,
awarding points on a scale from 1 to 100
for three categories: problem clarity,
originality, and difficulty.

The rating for Alice's challenge is
the triplet a = (a[0], a[1], a[2]),
and the rating for Bob's challenge is
the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by
comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

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

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  const length = a.length;
  let aPoints = 0;
  let bPoints = 0;
  let ar = [];

  for (let i = 0; i < length; i++) {
    if (a[i] < b[i]) {
      bPoints += 1;
    } else if (a[i] > b[i]) {
      aPoints += 1;
    }
  }

  ar = [aPoints, bPoints];
  return ar;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((bTemp) => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
