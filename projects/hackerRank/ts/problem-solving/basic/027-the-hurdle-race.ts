/* 

A video player plays a game in which the character competes in a hurdle race.
Hurdles are of varying heights, and the characters have a maximum height they can jump.
There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose.
How many doses of the potion must the character take to be able to jump all of the hurdles.
If the character can already clear all of the hurdles, return 0.

Example
height = [1, 2, 3, 3, 2]
k = 1

The character can jump 1 unit high initially and must take 3 - 1 = 2 doses of potion to be able to jump all of the hurdles.

*/

function hurdleRace(k: number, height: number[]): number {
  const maxHeight = Math.max(...height);
  return Math.max(maxHeight - k, 0);
}

hurdleRace(4, [1, 6, 3, 5, 2]); // 2
hurdleRace(7, [2, 5, 4, 5, 2]); // 0

// AI

function hurdleRace2(k: number, height: number[]): number {
  return Math.max(0, Math.max(...height) - k);
}
// For very large arrays in TypeScript, prefer a manual loop over the spread operator to avoid argument-limit issues:
function hurdleRace3(k: number, height: number[]): number {
  let maxH = 0;
  for (const h of height) if (h > maxH) maxH = h;
  return Math.max(0, maxH - k);
}
