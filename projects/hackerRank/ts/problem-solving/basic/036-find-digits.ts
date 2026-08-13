/* 

An integer d is a divisor of an integer n if the remainder of n % d = 0.

Given an integer, for each digit that makes up the integer determine whether it is a divisor.
Count the number of divisors occurring within the integer.

Example
n = 124
Check whether 1, 2 and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3.

n = 111
Check whether 1, 1, and 1 are divisors of 111. All 3 numbers divide evenly into 111 so return 3.

n = 10
Check whether 1 and 0 are divisors of 10. 1 is, but 0 is not. Return 1.

*/

function findDigits(n: number): number {
  const strN = String(n);
  let divisors = 0;

  for (const num of strN.split('')) {
    const intNum = Number(num);
    if (n % intNum === 0) divisors++;
  }

  return divisors;
}

findDigits(12); // 2
findDigits(1012); // 3
