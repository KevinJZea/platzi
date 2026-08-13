/*

You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age.
They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

Example

candles = [4, 4, 1, 3]

The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.

*/

function birthdayCakeCandles(candles: number[]): number {
  let largestNumber = candles[0];
  let amount = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] < largestNumber) continue;
    if (candles[i] === largestNumber) amount++;
    else {
      largestNumber = candles[i];
      amount = 1;
    }
  }

  return amount;
}

birthdayCakeCandles([3, 2, 1, 3]); // 2
