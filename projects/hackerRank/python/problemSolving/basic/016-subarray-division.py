"""

Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

- The length of the segment matches Ron's birth month, and,
- The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.

Example

s = [2, 2, 1, 3, 2]
d = 4
m = 2

Lily wants to find segments summing to Ron's birth day, d=4 with a length equalling his birth month, m=2.
In this case, there are two segments meeting her criteria: [2, 2] and [1, 3].

"""

def subarrayDivision(s, d, m):
    total = 0
    for i in range(len(s)):
        if i + m - 1 >= len(s):
            break

        slices = s[i:(i + m)]

        if sum(slices) == d:
            total += 1

    return total

subarrayDivision([1, 2, 1, 3, 2], 3, 2); # 2
subarrayDivision([1, 1, 1, 1, 1, 1], 3, 2); # 0
subarrayDivision([4], 4, 1); # 1

# AI

def birthday(s: list[int], d: int, m: int) -> int:
    n = len(s)
    # No segment of length m can exist if m is invalid or exceeds array length
    if m <= 0 or m > n:
        return 0

    # Sum of the first window
    window_sum = sum(s[:m])
    count = 1 if window_sum == d else 0

    # Slide: add entering element, remove leaving element
    for i in range(m, n):
        window_sum += s[i] - s[i - m]
        if window_sum == d:
            count += 1

    return count
