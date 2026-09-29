"""

You are given a number of sticks of varying lengths.
You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left.
At each iteration you will determine the length of the shortest stick remaining,
cut that length from each of the longer sticks and then discard all the pieces of that shortest length.
When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.

Example
arr = [1, 2, 3]

The shortest stick length is 1, so cut that length from the longer two and discard the pieces of length 1.
Now the lengths are [1, 2]. Again, the shortest stick is of length 1,
so cut that amount from the longer stick and discard those pieces.
There is only one stick left, arr = [1], so discard that stick.
The number of sticks at each iteration are answer = [1, 2, 3].

"""

def cutTheSticks(arr):
    lengths = []
    modifiableArr = arr.copy()
    
    while True:
        lengths.append(len(modifiableArr))

        minNum = min(modifiableArr)
        modifiableArr = [i - minNum for i in modifiableArr if i - minNum > 0]

        if len(modifiableArr) == 0:
            break
    
    return lengths

cutTheSticks([5, 4, 4, 2, 2, 8]); # [6, 4, 2, 1]
cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]); # [8, 6, 4, 1]

# AI

from collections import Counter

def cut_the_sticks(arr):
    if not arr:
        return []

    counts = Counter(arr)              # length -> frequency
    remaining = len(arr)
    result = []

    for length in sorted(counts):      # distinct lengths, shortest first
        result.append(remaining)       # sticks left before this cut
        remaining -= counts[length]    # sticks of this length get discarded

    return result
