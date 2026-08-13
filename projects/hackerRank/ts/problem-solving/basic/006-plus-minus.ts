/* 

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^(-4) are acceptable.

Example

arr = [1, 1, 0, -1, -1]

There are n = 5 elements: two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:

0.400000
0.400000
0.200000

*/

function plusMinus(arr: number[]): void {
  const l = arr.length;
  let pos = 0,
    neg = 0,
    zer = 0;

  for (let num of arr) {
    if (num === 0) zer++;
    else if (num > 0) pos++;
    else neg++;
  }

  console.log(pos / l);
  console.log(neg / l);
  console.log(zer / l);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
// 0.500000
// 0.333333
// 0.166667
