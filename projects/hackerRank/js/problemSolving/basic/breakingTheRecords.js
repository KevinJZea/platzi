/*

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
She tabulates the number of times she breaks her season record for most points and least points in a game.
Points scored in the first game establish her record for the season, and she begins counting from there.

Given the scores for a season,
find and print the number of times Maria breaks her records for most and least points scored during the season.

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

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
  const length = scores.length;
  let score = 0;
  let highestBroken = 0;
  let lowestBroken = 0;
  let highest = scores[0];
  let lowest = scores[0];

  for (let i = 0; i < length; i++) {
    score = scores[i];

    if (score > highest) {
      highest = score;
      highestBroken += 1;
    } else if (score < lowest) {
      lowest = score;
      lowestBroken += 1;
    }
  }

  // const result = (highestBroken + " " + lowestBroken).toString();

  const result = [highestBroken, lowestBroken];

  // console.log(highestBroken, lowestBroken);
  // console.log(result);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const scores = readLine()
    .split(" ")
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
