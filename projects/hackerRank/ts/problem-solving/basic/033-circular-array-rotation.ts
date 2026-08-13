/*

John Watson knows of an operation called a right circular rotation on an array of integers.
One rotation operation moves the last array element to the first position and shifts all remaining elements right one.
To test Sherlock's abilities, Watson provides Sherlock with an array of integers.
Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

Example
a = [3, 4, 5]
k = 2
queries = [1, 2]

Here k is the number of rotations on a, and queries holds the list of indices to report.
First we perform the two rotations: [3, 4, 5] -> [5, 3, 4] -> [4, 5, 3]

Now return the values from the zero-based indices  and  as indicated in the queries array.
a[1] = 5
a[2] = 3

*/

function circularArrayRotation(
  a: number[],
  k: number,
  queries: number[],
): number[] {
  /* const startingIndex = (k % a.length) * -1;
    
    return a.slice(startingIndex + queries[0], startingIndex + queries[queries.length - 1] + 1); */

  const newA = [...a];
  for (let i = 1; i <= k; i++) {
    const tail = newA.pop() as number;
    newA.unshift(tail);
  }

  const answer: number[] = [];

  for (const query of queries) {
    answer.push(newA[query]);
  }
  return answer;
}

circularArrayRotation([1, 2, 3], 2, [0, 1, 2]); // [2,3,1]

// AI

function circularArrayRotation2(
  a: number[],
  k: number,
  queries: number[],
): number[] {
  const n = a.length;
  if (n === 0) return [];
  k %= n;
  return queries.map((q) => a[(((q - k) % n) + n) % n]);
}
