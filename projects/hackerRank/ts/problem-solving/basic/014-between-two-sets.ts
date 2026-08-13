/* 

There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

1. The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example
a = [2, 6]
b = [24, 36]

There are two numbers between the arrays: 6 and 12.
6 % 2 = 0, 6 % 6 = 0, 24 % 6 = 0 and 36 % 6 = 0 for the first value.
12 % 2 = 0, 12 % 6 = 0 and 24 % 12 = 0, 36 % 12 = 0 for the second value. Return 2.

*/

function betweenTwoSets(a: number[], b: number[]): number {
  const highestFromA = Math.max(...a);
  const lowestFromB = Math.min(...b);

  const possibleNumbers: number[] = [];

  for (let i = highestFromA; i <= lowestFromB; i++) {
    possibleNumbers.push(i);
  }

  const numbersThatHaveFactors: number[] = [];

  for (let possibleNum of possibleNumbers) {
    let timesPossibleNumHasFactor = 0;

    for (let numFromA of a) {
      if (possibleNum % numFromA === 0) {
        timesPossibleNumHasFactor++;
      }
    }

    if (timesPossibleNumHasFactor === a.length) {
      numbersThatHaveFactors.push(possibleNum);
    }
  }

  const numbersFactorOfB: number[] = [];

  for (let num of numbersThatHaveFactors) {
    let timesNumIsFactor = 0;

    for (let numFromB of b) {
      if (numFromB % num === 0) {
        timesNumIsFactor++;
      }
    }

    if (timesNumIsFactor === b.length) {
      numbersFactorOfB.push(num);
    }
  }

  return numbersFactorOfB.length;
}

function betweenTwoSets2(a: number[], b: number[]): number {
  const highestFromA = Math.max(...a);
  const lowestFromB = Math.min(...b);

  const possibleNumbers: number[] = [];

  for (let i = highestFromA; i <= lowestFromB; i++) {
    possibleNumbers.push(i);
  }

  const numbersThatHaveFactors: number[] = [];

  numThatHaveFactorsLoop: for (let possibleNum of possibleNumbers) {
    for (let numFromA of a) {
      if (possibleNum % numFromA !== 0) {
        continue numThatHaveFactorsLoop;
      }
    }

    numbersThatHaveFactors.push(possibleNum);
  }

  const numbersFactorOfB: number[] = [];

  numFactorOfBLoop: for (let num of numbersThatHaveFactors) {
    for (let numFromB of b) {
      if (numFromB % num !== 0) {
        continue numFactorOfBLoop;
      }
    }

    numbersFactorOfB.push(num);
  }

  return numbersFactorOfB.length;
}

betweenTwoSets([2, 4], [16, 32, 96]); // 3
