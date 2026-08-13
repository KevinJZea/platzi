/* 

Lily likes to play games with integers.
She has created a new game where she determines the difference between a number and its reverse.
For instance, given the number 12, its reverse is 21. Their difference is 9.
The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making.
She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j] and a number k,
determine the number of days in the range that are beautiful.
Beautiful numbers are defined as numbers where | i - reverse(i) | is evenly divisible by k.
If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

*/

function beautifulDays(i: number, j: number, k: number): number {
  let amountOfBeautifulDays = 0;
  for (let day = i; day <= j; day++) {
    const reverseDay = Number(String(day).split('').reverse().join(''));
    const diff = Math.abs(day - reverseDay);

    if (diff % k === 0) amountOfBeautifulDays++;
  }

  return amountOfBeautifulDays;
}

beautifulDays(20, 23, 6); // 2
beautifulDays(13, 45, 3); // 33

// AI

function beautifulDays2(i: number, j: number, k: number): number {
  const reverseNum = (n: number): number => {
    let rev = 0;
    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return rev;
  };

  let count = 0;
  for (let n = i; n <= j; n++) {
    if (Math.abs(n - reverseNum(n)) % k === 0) count++;
  }
  return count;
}
