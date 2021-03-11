/*

Complete the getGrade(score) function in the editor.
It has one parameter: an integer, score,
denoting the number of points Julia earned on an exam.
It must return the letter corresponding to her grade
according to the following rules:

If 25 < score <= 30, then grade = A.
If 20 < score <= 25, then grade = B.
If 15 < score <= 20, then grade = C.
If 10 < score <= 15, then grade = D.
If 5 < score <= 10, then grade = E.
If 0 <= score <= 5, then grade = F.


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
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getGrade(score) {
  let grade;
  // Write your code here

  if (25 < score && score <= 30) {
    grade = "A";
  } else if (20 < score && score <= 25) {
    grade = "B";
  } else if (15 < score && score <= 20) {
    grade = "C";
  } else if (10 < score && score <= 15) {
    grade = "D";
  } else if (5 < score && score <= 10) {
    grade = "E";
  } else if (0 <= score && score <= 5) {
    grade = "F";
  }

  return grade;
}

function main() {
  const score = +readLine();

  console.log(getGrade(score));
}
