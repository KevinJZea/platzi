/*

Complete the function in the editor.
It has two parameters: a and b.
It must return an object modeling a rectangle that has the following properties:

- length: This value is equal to a.
- width: This value is equal to b.
- perimeter: This value is equal to 2 * (a + b).
- area: This value is equal to a * b.

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
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = (a + b) * 2;
  this.area = a * b;
}

function main() {
  const a = +readLine();
  const b = +readLine();

  const rec = new Rectangle(a, b);

  console.log(rec.length);
  console.log(rec.width);
  console.log(rec.perimeter);
  console.log(rec.area);
}
