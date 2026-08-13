"""

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  

- The left-to-right diagonal = 1 + 5 + 9 = 15.
- The right-to-left diagonal = 3 + 5 + 9 = 17.
- Their absolute difference is | 15 - 17 | = 2.

"""

def diagonalDifference(arr):
    LTR = 0
    RTL = 0

    for i in range(len(arr)):
        LTR += arr[i][i]
        RTL += arr[i][len(arr) - i - 1]

    return abs(LTR - RTL)

diagonalDifference(
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
) # 15
