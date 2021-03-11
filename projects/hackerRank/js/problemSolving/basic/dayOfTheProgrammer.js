/*

Marie invented a Time Machine and wants to test it by time-traveling
to visit Russia on the Day of the Programmer (the 256th day of the year)
during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar;
since 1919 they used the Gregorian calendar system.
The transition from the Julian to Gregorian calendar system occurred in 1918,
when the next day after January 31st was February 14th.
This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

- Divisible by 400.
- Divisible by 4 and not divisible by 100.

Given a year, y, find the date of the 256th day of that year
according to the official Russian calendar during that year.
Then print it in the format dd.mm.yyyy, where dd is the two-digit day,
mm is the two-digit month, and yyyy is y.


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

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  const theYear = 1918;
  let date = "";

  if (year < theYear) {
    if (year % 4 === 0) {
      date = `12.09.${year}`;
    } else {
      date = `13.09.${year}`;
    }
  } else if (year === theYear) {
    date = `26.09.${year}`;
  } else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      date = `12.09.${year}`;
    } else {
      date = `13.09.${year}`;
    }
  }

  console.log(date);
  return date;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
