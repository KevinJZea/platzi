/* 

Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given q queries in the form of x, y, and z representing the respective positions for cats A and B,
and for mouse C. Complete the function catAndMouse to return the appropriate answer to each query,
which will be printed on a new line.

- If cat A catches the mouse first, print Cat A.
- If cat B catches the mouse first, print Cat B.
- If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

Example
x = 2
y = 5
z = 4

The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4.
Cat B, at position 5 will arrive first since it is only 1 unit away while the other is 2 units away. Return 'Cat B'.

*/

function catAndMouse(x: number, y: number, z: number) {
  const diffA = Math.abs(x - z);
  const diffB = Math.abs(y - z);

  return diffA === diffB ? 'Mouse C' : diffA < diffB ? 'Cat A' : 'Cat B';
}

catAndMouse(1, 2, 3); // Cat B
catAndMouse(1, 3, 2); // Mouse C

// AI

function catAndMouse2(x: number, y: number, z: number): string {
  const distA = Math.abs(x - z);
  const distB = Math.abs(y - z);

  if (distA < distB) {
    return 'Cat A';
  } else if (distB < distA) {
    return 'Cat B';
  } else {
    return 'Mouse C';
  }
}
