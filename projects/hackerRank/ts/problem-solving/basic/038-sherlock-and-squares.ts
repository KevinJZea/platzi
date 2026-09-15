/* 

Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

Example
a = 24
b = 49

There are three square integers in the range: 25, 36 and 49. Return 3.

*/

function squares(a: number, b: number): number {
  let amount = 0;
  let lowestSqrRoot = 0;

  for (let i = a; i <= b; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      lowestSqrRoot = Math.sqrt(i);
      break;
    }
  }

  if (lowestSqrRoot === 0) return 0;

  for (let j = lowestSqrRoot; j <= 1000000; j++) {
    if (j ** 2 > b) break;
    amount++;
  }

  return amount;
}

squares(3, 9); // 2
squares(17, 24); // 0
squares(35, 70); // 3
squares(100, 1000); // 22

// AI

function squares2(a: number, b: number): number {
  // Integer floor sqrt via Math.sqrt with correction for floating-point error
  const isqrt = (n: number): number => {
    if (n < 0) return -1;
    let r = Math.floor(Math.sqrt(n));
    // Correct potential off-by-one from floating-point imprecision
    while (r * r > n) r--;
    while ((r + 1) * (r + 1) <= n) r++;
    return r;
  };

  const low = isqrt(a - 1) + 1; // smallest k with k^2 >= a  (ceil of sqrt(a))
  const high = isqrt(b); // largest k with k^2 <= b   (floor of sqrt(b))

  return Math.max(0, high - low + 1);
}
