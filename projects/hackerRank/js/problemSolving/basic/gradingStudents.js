/*

HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each
student's grade according to these rules:

If the difference between the grade and the next multiple of 5
is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs
as the result will still be a failing grade.

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here

  const length = grades.length;
  const minimum = 38;
  const step = 5;

  for (let i = 0; i < length; i++) {
    // if (grades[i] < minimum) {
    // //   break;
    // // } else if (grades[i] % step === 0) {
    // //   break;
    // // } else if ((step - (grades[i] % step)) >= 3) {
    // //   break;
    // console.log("minimum")
    // } else

    if (step - (grades[i] % step) < 3 && grades[i] >= minimum) {
      grades[i] += step - (grades[i] % step);
    }

    // else if ((grades[i] % 5) + 1 - grades[i] < 3) {
    //   console.log(grades[i], "three");
    //   grades[i] += (grades[i] % 5) + 1;
    //   console.log(grades[i], "three+1");
    // }
  }
  console.log(grades);
  return grades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
