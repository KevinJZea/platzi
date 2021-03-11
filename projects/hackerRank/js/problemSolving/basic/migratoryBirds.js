/*

Given an array of bird sightings where every element
represents a bird type id,
determine the id of the most frequently sighted type.
If more than 1 type has been spotted that maximum amount,
return the smallest of their ids.


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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  const length = arr.length;
  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let result = 0;

  for (let i = 0; i < length; i++) {
    switch (arr[i]) {
      case 1:
        ones++;
        break;

      case 2:
        twos++;
        break;

      case 3:
        threes++;
        break;

      case 4:
        fours++;
        break;

      case 5:
        fives++;
        break;
    }
  }

  const sums = [ones, twos, threes, fours, fives];

  const sumsLength = sums.length;
  let maximum = [0];
  let place = 0;
  console.log(sums);

  for (let i = 0; i < sumsLength; i++) {
    if (sums[i] > maximum[0]) {
      maximum = [sums[i]];
      place = i + 1; // This is the highest bird id saved in place
    } else if (sums[i] === maximum[0]) {
      maximum.push(sums[i]);
    }
  }

  const maximumLength = maximum.length;

  if (maximumLength === 1) {
    result = place;
  } else {
    for (let j = 0; j < sumsLength; j++) {
      if (maximum[0] === sums[j]) {
        result = j + 1; // +1 because j+1 is the bird id
        break;
      }
    }
  }

  console.log(result);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
