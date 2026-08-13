"""

Lily likes to play games with integers.
She has created a new game where she determines the difference between a number and its reverse.
For instance, given the number 12, its reverse is 21. Their difference is 9.
The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making.
She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j] and a number k,
determine the number of days in the range that are beautiful.
Beautiful numbers are defined as numbers where | i - reverse(i) | is evenly divisible by k.
If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

"""

def beautifulDays(i, j, k):
    amount = 0
    for day in range(i, j + 1):
        strDay = str(day)
        invertedDay = int(strDay[::-1])

        if abs(day - invertedDay) % k == 0:
            amount += 1
    
    return amount

beautifulDays(20, 23, 6); # 2
beautifulDays(13, 45, 3); # 33

# AI

def beautifulDays(i: int, j: int, k: int) -> int:
    def reverse_num(n: int) -> int:
        rev = 0
        while n:
            rev = rev * 10 + n % 10
            n //= 10
        return rev

    return sum(1 for n in range(i, j + 1) if (n - reverse_num(n)) % k == 0)
# Python trick: (n - reverse_num(n)) % k == 0 works without abs() because
# Python's modulo always returns a non-negative result for positive k, so |x| % k == 0 ⟺ x % k == 0.