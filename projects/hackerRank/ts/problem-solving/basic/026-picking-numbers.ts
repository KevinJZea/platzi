/* 

Given an array of integers,
find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example
a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements.

*/

function pickingNumbers(a: number[]): number {
  /* let maxNumber = 1;
    const sortedA = a.sort();

    let referenceNumber = sortedA[0];
    for (let i = 1; i < a.length; i++) {
        const currentNumber = sortedA[i];

        if (currentNumber === referenceNumber) {
            
        }
        
        referenceNumber = sortedA[i];
    }

    return maxNumber; */

  const numbersMapped = a.reduce((result, num) => {
    if (result.get(num)) return result.set(num, result.get(num) + 1);
    return result.set(num, 1);
  }, new Map());

  const sortedNumbersMapped = Array.from(numbersMapped.entries()).sort(
    (a, b) => a[0] - b[0],
  );

  let maxTimes = 1;
  for (let i = 0; i < sortedNumbersMapped.length; i++) {
    const [num, times] = sortedNumbersMapped[i];
    const [nextNum, nextNumTimes] = sortedNumbersMapped[i + 1] ?? [Infinity, 0];

    let totalTimes = times;
    if (num + 1 === nextNum) totalTimes += nextNumTimes;

    if (totalTimes > maxTimes) maxTimes = totalTimes;
  }

  return maxTimes;
}

pickingNumbers([4, 6, 5, 3, 3, 1]); // 3
pickingNumbers([1, 2, 2, 3, 1, 2]); // 5

// AI

function pickingNumbers2(a: number[]): number {
  const freq = new Map<number, number>();
  for (const v of a) {
    freq.set(v, (freq.get(v) ?? 0) + 1);
  }
  let best = 0;
  for (const [x, c] of freq) {
    const next = freq.get(x + 1) ?? 0;
    if (c + next > best) best = c + next;
  }
  return best;
}
