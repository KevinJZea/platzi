"""
Given an array of integers, find the sum of its elements.

For example, if the array ar = [1, 2, 3], 1 + 2 + 3, so return 6.
"""

import functools

def simpleArraySum(ar):
    return sum(ar)

def simpleArraySum2(ar):
    return functools.reduce(lambda total, num: total + num, ar, 0)

simpleArraySum([1, 2, 3, 4, 10, 11]) # 31
