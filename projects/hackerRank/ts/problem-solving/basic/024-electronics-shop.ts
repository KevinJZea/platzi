/* 

A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget.
Given price lists for keyboards and USB drives and a budget, find the cost to buy them.
If it is not possible to buy both items, return -1.

Example
b = 60
keyboards = [40, 50, 60]
drives = [5, 8, 12]

The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB drive = 58.
Choose the latter as the more expensive option and return 58.

*/

function electronicsShop(keyboards: number[], drives: number[], b: number) {
  let max = -1;
  for (let keyboard of keyboards) {
    if (keyboard >= b) continue;

    for (let drive of drives) {
      if (drive >= b) continue;

      const sum = keyboard + drive;
      if (sum > b) continue;
      if (sum <= max) continue;
      max = sum;
    }
  }

  return max;
}

electronicsShop([3, 1], [5, 2, 8], 10); // 9
electronicsShop([4], [5], 5); // -1

// AI

function getMoneySpent(
  keyboards: number[],
  drives: number[],
  b: number,
): number {
  keyboards.sort((a, c) => a - c);
  drives.sort((a, c) => a - c);
  let max = -1;
  let i = 0;
  let j = drives.length - 1;
  while (i < keyboards.length && j >= 0) {
    const total = keyboards[i] + drives[j];
    if (total > b) {
      j--;
    } else {
      if (total > max) max = total;
      i++;
    }
  }
  return max;
}
