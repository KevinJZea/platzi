"""

Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

Example
a = 24
b = 49

There are three square integers in the range: 25, 36 and 49. Return 3.

"""

def squares(a, b):
    amount = 0
    
    for i in range(1, 100000):
        squaredNum = i ** 2
        if squaredNum < a:
            continue
        if squaredNum > b:
            break
        
        amount += 1
    
    return amount

squares(3, 9); # 2
squares(17, 24); # 0
squares(35, 70); # 3
squares(100, 1000); # 22

# AI

import math
def squares(a: int, b: int) -> int:
    # smallest k with k^2 >= a  (ceil of sqrt(a), exact via isqrt identity)
    low = math.isqrt(a - 1) + 1
    # largest k with k^2 <= b  (floor of sqrt(b), exact)
    high = math.isqrt(b)
    return max(0, high - low + 1)
