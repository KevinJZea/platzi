/* 

There is a large pile of socks that must be paired by color.
Given an array of integers representing the color of each sock,
determine how many pairs of socks with matching colors there are.

Example
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

There is one pair of color 1 and one of color 2.
There are three odd socks left, one of each color. The number of pairs is 2.

*/

function sockMerchant(n: number, ar: number[]): number {
  const socksMap = ar.reduce(
    (accum, num) => {
      if (accum[num]) return { ...accum, [num]: accum[num] + 1 };
      return { ...accum, [num]: 1 };
    },
    {} as Record<number, number>,
  );

  return Object.values(socksMap).reduce(
    (sum, num) => sum + Math.floor(num / 2),
    0,
  );
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3
sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // 4

// AI

function sockMerchant2(n: number, ar: number[]): number {
  const seen = new Set<number>();
  let pairs = 0;
  for (const sock of ar) {
    if (seen.has(sock)) {
      pairs++;
      seen.delete(sock);
    } else {
      seen.add(sock);
    }
  }
  return pairs;
}
