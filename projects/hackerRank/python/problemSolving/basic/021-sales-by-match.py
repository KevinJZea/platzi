"""

There is a large pile of socks that must be paired by color.
Given an array of integers representing the color of each sock,
determine how many pairs of socks with matching colors there are.

Example
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

There is one pair of color 1 and one of color 2.
There are three odd socks left, one of each color. The number of pairs is 2.

"""


def sockMerchant(n, ar):
    socks = {}
    for i in range(n):
        sock = ar[i]
        if sock in socks:
            socks[sock] += 1
        else:
            socks[sock] = 1

    total = 0
    for value in socks.values():
        total += value // 2

    return total

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); # 3
sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); # 4

# AI
def sock_merchant2(n: int, ar: list[int]) -> int:
    seen = set()
    pairs = 0
    for sock in ar:
        if sock in seen:
            pairs += 1
            seen.remove(sock)
        else:
            seen.add(sock)
    return pairs

from collections import Counter

def sock_merchant3(n: int, ar: list[int]) -> int:
    return sum(count // 2 for count in Counter(ar).values())
