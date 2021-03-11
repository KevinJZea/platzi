/*

Complete the reverseString function;
it has one parameter, s.
You must perform the following actions:

1. Try to reverse string s using the split,
reverse, and join methods.
2. If an exception is thrown,
catch it and print the contents of the exception's  on a new line.
3. Print s on a new line.
If no exception was thrown, then this should be the reversed string;
if an exception was thrown, this should be the original string.

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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  let newS = "";
  let letter = "";

  try {
    if (typeof s == "string") {
      for (let i = s.length - 1; i >= 0; i--) {
        letter = s.charAt(i);
        newS += letter;
      }

      console.log(newS);
    } else {
      throw new Error("s.split is not a function");
    }
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}
