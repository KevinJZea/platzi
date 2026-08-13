/* 

The Utopian Tree goes through 2 cycles of growth every year.
Each spring, it doubles in height. Each summer, its height increases by 1 meter.

A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring.
How tall will the tree be after n growth cycles?

For example, if the number of growth cycles is n = 5, the calculations are as follows:

Period  Height
0          1
1          2
2          3
3          6
4          7
5          14

*/

function utopianTree(n: number): number {
  let height = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) height++;
    else height *= 2;
  }
  return height;
}

utopianTree(0); // 1
utopianTree(1); // 2
utopianTree(4); // 7
utopianTree(3); // 6

// AI

function utopianTree2(n: number): number {
  if (n % 2 === 0) {
    return (1 << (Math.floor(n / 2) + 1)) - 1;
  }
  return (1 << (Math.floor(n / 2) + 2)) - 2;
}
