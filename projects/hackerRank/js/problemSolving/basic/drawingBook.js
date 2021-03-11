/*

A teacher asks the class to open their books to a page number.
A student can either start turning pages from the front of the
book or from the back of the book.
They always turn pages one at a time.
When they open the book, page 1 is always on the right side.

When they flip page 1, they see pages 2 and 3.
Each page except the last page will always be printed on both sides.
The last page may only be printed on the front,
given the length of the book.
If the book is n pages long, and a student wants to turn to page p,
what is the minimum number of pages to turn?
They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be
turned in order to arrive at page p.

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
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  /*
   * Write your code here.
   */

  let pagesLeftToRight = 0;
  let pagesRightToLeft = 0;
  let currentPage = 1;

  /* To get pagesLeftToRight */

  while (currentPage < p) {
    currentPage += 2;
    pagesLeftToRight++;
  }

  /* To get pagesRightToLeft */

  if (n % 2 === 1) {
    currentPage = n - 1;
  } else {
    currentPage = n;
  }

  while (currentPage > p) {
    currentPage -= 2;
    pagesRightToLeft++;
  }

  /* Final decision */

  if (pagesLeftToRight < pagesRightToLeft) {
    return pagesLeftToRight;
  } else {
    return pagesRightToLeft;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const p = parseInt(readLine(), 10);

  let result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
