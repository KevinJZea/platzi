/* 

You are given a number of sticks of varying lengths.
You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left.
At each iteration you will determine the length of the shortest stick remaining,
cut that length from each of the longer sticks and then discard all the pieces of that shortest length.
When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.

Example
arr = [1, 2, 3]

The shortest stick length is 1, so cut that length from the longer two and discard the pieces of length 1.
Now the lengths are [1, 2]. Again, the shortest stick is of length 1,
so cut that amount from the longer stick and discard those pieces.
There is only one stick left, arr = [1], so discard that stick.
The number of sticks at each iteration are answer = [1, 2, 3].

*/

function cutTheSticks(arr: number[]): number[] {
  let currentArr = [...arr];
  const lengths: number[] = [];

  while (true) {
    lengths.push(currentArr.length);

    const minNum = Math.min(...currentArr);

    const allAreMinNum = currentArr.every((n) => n === minNum);
    if (allAreMinNum) break;

    currentArr = currentArr.map((n) => n - minNum).filter((n) => n !== 0);
  }

  return lengths;
}

cutTheSticks([5, 4, 4, 2, 2, 8]); // [6, 4, 2, 1]
cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]); // [8, 6, 4, 1]
