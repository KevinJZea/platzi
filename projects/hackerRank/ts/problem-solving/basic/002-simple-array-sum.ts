/*

Given an array of integers, find the sum of its elements.

For example, if the array ar = [1, 2, 3], 1 + 2 + 3, so return 6.

*/

function simpleArraySum(ar: number[]): number {
  return ar.reduce((sum, num) => sum + num, 0);
}
