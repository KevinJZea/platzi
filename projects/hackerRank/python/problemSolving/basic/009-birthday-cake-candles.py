"""

You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age.
They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

Example

candles = [4, 4, 1, 3]

The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.

"""

def birthdayCakeCandles(candles):
    tallest = [candles[0]]
    tallestValue = candles[0]

    for i in range(1, len(candles)):
        height = candles[i]
        if height > tallestValue:
            tallest = [height]
            tallestValue = height
        elif height == tallestValue:
            tallest.append(height)

    return len(tallest)

def birthdayCakeCandles2(candles):
    tallest = candles[0]
    amount = 1

    for i in range(1, len(candles)):
        height = candles[i]
        if height > tallest:
            tallest = height
            amount = 1
        elif height == tallest:
            amount += 1

    return amount

birthdayCakeCandles([3, 2, 1, 3]); # 2
