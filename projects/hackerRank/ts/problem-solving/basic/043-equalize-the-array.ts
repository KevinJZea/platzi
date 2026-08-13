/* 

Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

Example
arr = [1, 2, 2, 3]

Delete the 2 elements 1 and 3 leaving arr = [2, 2].
If both twos plus either the 1 or the 3 are deleted, it takes 3 deletions to leave either [3] or [1].
The minimum number of deletions is 2.

*/

function equalizeArray(arr: number[]): number {
  const initialMap = new Map();
  const mappedArr: Map<number, number> = arr.reduce(
    (map, num) => {
      if (map.get(num)) {
        map.set(num, (map.get(num) as number) + 1);
        return map;
      }
      map.set(num, 1);
      return map;
    },
    initialMap as Map<number, number>,
  );

  let maxAmount = 0;

  for (const amount of mappedArr.values()) {
    if (amount > maxAmount) {
      maxAmount = amount;
    }
  }

  return arr.length - maxAmount;
}

equalizeArray([3, 3, 2, 1, 3]); // 2
equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]); // 4
