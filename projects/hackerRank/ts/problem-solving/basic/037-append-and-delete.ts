/* 

You have two strings of lowercase English letters. You can perform two types of operations on the first string:

1. Append a lowercase English letter to the end of the string.
2. Delete the last character of the string. Performing this operation on an empty string results in an empty string.

Given an integer, k, and two strings, s and t,
determine whether or not you can convert s to t by performing exactly k of the above operations on s.
If it's possible, print Yes. Otherwise, print No.

Example. s = [a, b, c]
t = [d, e, f]
k = 6

To convert s to t, we first delete all of the characters in 3 moves.
Next we add each of the characters of t in order. On the 6th move, you will have the matching string. Return Yes.

If there were more moves available, they could have been eliminated by performing multiple deletions on an empty string.
If there were fewer than 6 moves, we would not have succeeded in creating the new string.

*/

// PENDING ON 05/Aug/26
function appendAndDelete(s: string, t: string, k: number): 'Yes' | 'No' {
  console.log({ s, t, k });
  let similarCharacters = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) similarCharacters++;
    else break;
  }

  const differentCharactersFromS = s.length - similarCharacters;
  const differentCharactersFromT = t.length - similarCharacters;

  if (
    similarCharacters +
      (differentCharactersFromS + differentCharactersFromT) ===
    k
  )
    return 'No';

  return differentCharactersFromS + differentCharactersFromT <= k
    ? 'Yes'
    : 'No';
}

appendAndDelete('hackerhappy', 'hackerrank', 9); // Yes
appendAndDelete('aba', 'aba', 7); // Yes
appendAndDelete('ashley', 'ash', 2); // No

// 06/Aug/26 - 13:30
function appendAndDelete2(s: string, t: string, k: number): 'Yes' | 'No' {
  const sLength = s.length,
    tLength = t.length;

  if (k >= sLength + tLength) return 'Yes';

  return 'No';
}

// 06/Aug/26 - 15:30
function appendAndDelete3(s: string, t: string, k: number): 'Yes' | 'No' {
  const sLength = s.length,
    tLength = t.length;

  if (k >= sLength + tLength) return 'Yes';

  let similarCharacters = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) similarCharacters++;
    else break;
  }

  const differentCharactersFromS = s.length - similarCharacters;
  const differentCharactersFromT = t.length - similarCharacters;
  const sumOfDifferences = differentCharactersFromS + differentCharactersFromT;

  if (sumOfDifferences === k) return 'Yes';
  if (k - sumOfDifferences >= 0 && (k - sumOfDifferences) % 2 === 0)
    return 'Yes';

  return 'No';
}
