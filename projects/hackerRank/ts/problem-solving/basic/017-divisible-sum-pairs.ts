/* 

Given an array of integers and a positive integer k,
determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria: [1, 4], [2, 3], and [4, 6].

*/

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  const pairs: number[][] = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (i >= j) continue;
      if ((ar[i] + ar[j]) % k !== 0) continue;

      pairs.push([i, j]);
    }
  }

  return pairs.length;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]); // 5

// AI

function divisibleSumPairs2(n: number, k: number, ar: number[]): number {
  const counts: number[] = new Array(k).fill(0);
  for (const num of ar) {
    counts[num % k]++;
  }

  let pairs = (counts[0] * (counts[0] - 1)) >> 1;

  const upperExclusive = (k + 1) >> 1;
  for (let r = 1; r < upperExclusive; r++) {
    pairs += counts[r] * counts[k - r];
  }

  if (k % 2 === 0) {
    const halfCount = counts[k / 2];
    pairs += (halfCount * (halfCount - 1)) >> 1;
  }

  return pairs;
}
