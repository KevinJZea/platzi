"""

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

- The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
- The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
If it is possible, return YES, otherwise return NO.

Example
x1 = 2
v1 = 1
x2 = 1
v2 = 2

After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so the answer is YES.

"""

def numberLineJumps(x1, v1, x2, v2):
    if v2 >= v1:
        return "NO"

    for i in range(10000):
        pos_k1 = v1 * i + x1
        pos_k2 = v2 * i + x2
        if pos_k1 == pos_k2:
            return "YES"
        elif pos_k1 > pos_k2:
            return "NO"
        
numberLineJumps(0, 3, 4, 2) # YES
numberLineJumps(0, 2, 5, 3) # NO
