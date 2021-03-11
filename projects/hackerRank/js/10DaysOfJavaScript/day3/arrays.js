/*

Complete the getSecondLargest function in the editor below.
It has one parameter: an array, nums, of n numbers.
The function must find and return the second largest number in nums.

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

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function

  const length = nums.length;
  let firstValue = nums[0],
    secondValue = 0;

  for (let i = 1; i < length; i++) {
    // console.log(firstValue, secondValue);
    if (nums[i] > firstValue) {
      // console.log("New First");
      secondValue = firstValue;
      firstValue = nums[i];
    } else if (nums[i] > secondValue && nums[i] < firstValue) {
      // console.log("New Second");
      secondValue = nums[i];
    }
  }

  return secondValue;
}
