/* 

Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

- The length of the segment matches Ron's birth month, and,
- The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.

Example

s = [2, 2, 1, 3, 2]
d = 4
m = 2

Lily wants to find segments summing to Ron's birth day, d=4 with a length equalling his birth month, m=2.
In this case, there are two segments meeting her criteria: [2, 2] and [1, 3].

*/

function subarrayDivision(s: number[], d: number, m: number): number {
  const ways: number[][] = [];

  for (let i = 0; i < s.length; i++) {
    if (i > s.length - m) break;

    const segments: number[] = [];

    for (let j = 0; j < m; j++) {
      segments.push(s[i + j]);
    }

    const sum = segments.reduce((total, num) => total + num, 0);
    if (sum === d) ways.push(segments);
  }

  return ways.length;
}

subarrayDivision([1, 2, 1, 3, 2], 3, 2); // 2
subarrayDivision([1, 1, 1, 1, 1, 1], 3, 2); // 0
subarrayDivision([4], 4, 1); // 1
