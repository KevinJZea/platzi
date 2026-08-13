/* 

There is a string, s, of lowercase English letters that is repeated infinitely many times.
Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

Example
s = 'abcac'
n = 10

The substring we consider is 'abcacabcac', the first 10 characters of the infinite string.
There are 4 occurrences of a in the substring.

*/

function repeatedString(s: string, n: number): number {
  const searchedCharacter = 'a';

  if (!s.includes(searchedCharacter)) return 0;

  let times = 0;
  if (n >= s.length) {
    const timesSearchedCharacterInString = s
      .split('')
      .reduce(
        (amount, letter) => (letter === searchedCharacter ? ++amount : amount),
        0,
      );
    const timesStringInN = Math.floor(n / s.length);
    times += timesSearchedCharacterInString * timesStringInN;
  }

  const iterations = n % s.length;
  for (let i = 0; i < iterations; i++) {
    const character = s[i];
    if (character === searchedCharacter) times++;
  }

  return times;
}

repeatedString('aba', 10); // 7
repeatedString('a', 1000000000000); // 1000000000000
