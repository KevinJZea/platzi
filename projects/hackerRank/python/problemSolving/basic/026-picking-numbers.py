"""

Given an array of integers,
find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example
a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements.

"""

def pickingNumbers(a):
    maxNum = max(a)
    maxTimes = 1
    
    for i in range(maxNum):
        times = a.count(i)
        timesPlus1 = a.count(i + 1)
        total = times + timesPlus1

        if total > maxTimes:
            maxTimes = total
    
    return maxTimes

pickingNumbers([4, 6, 5, 3, 3, 1]); # 3
pickingNumbers([1, 2, 2, 3, 1, 2]); # 5

# AI

from collections import Counter
from typing import List

def pickingNumbers(a: List[int]) -> int:
    freq = Counter(a)
    best = 0
    for x in freq:
        best = max(best, freq[x] + freq.get(x + 1, 0))
    return best
