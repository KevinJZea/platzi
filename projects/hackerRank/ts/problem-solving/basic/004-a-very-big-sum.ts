/*

In this challenge, you need to calculate and print the sum of elements in an array,
considering that some integers may be very large.

*/

function aVeryBigSum(ar: number[]): number {
  return ar.reduce((sum, num) => sum + num, 0);
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]); // 5000000015
