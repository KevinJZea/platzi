"""

Given an array of integers and a positive integer k,
determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria: [1, 4], [2, 3], and [4, 6].

"""

def divisibleSumPairs(n, k, ar):
    amount = 0
    for i in range(n):
        num1 = ar[i]

        for j in range(n):
            num2 = ar[j]
            if i >= j:
                continue
            if (num1 + num2) % k == 0:
                amount += 1

    return amount

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]) # 5

# AI

def divisibleSumPairs(n, k, ar):
    counts = [0] * k
    for num in ar:
        counts[num % k] += 1

    pairs = counts[0] * (counts[0] - 1) // 2

    for r in range(1, (k + 1) // 2):
        pairs += counts[r] * counts[k - r]

    if k % 2 == 0:
        half_count = counts[k // 2]
        pairs += half_count * (half_count - 1) // 2

    return pairs
