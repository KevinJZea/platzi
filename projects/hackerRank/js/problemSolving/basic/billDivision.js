/*

Two friends Anna and Brian, are deciding how to split
the bill at a dinner. Each will only pay for the items they consume.
Brian gets the check and calculates Anna's portion.
You must determine if his calculation is correct.

*/

"use strict";

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

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  const length = bill.length;
  let bActual = 0;
  let result = "";

  for (let i = 0; i < length; i++) {
    bActual += bill[i];
  }

  bActual -= bill[k];
  bActual /= 2;

  if (bActual === b) {
    result = "Bon Appetit";
  } else {
    result = `${b - bActual}`;
  }

  console.log(result);
  return result;
}

function main() {
  const nk = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const bill = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((billTemp) => parseInt(billTemp, 10));

  const b = parseInt(readLine().trim(), 10);

  bonAppetit(bill, k, b);
}
