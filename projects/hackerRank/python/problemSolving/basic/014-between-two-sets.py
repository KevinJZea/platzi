"""

There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

1. The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example
a = [2, 6]
b = [24, 36]

There are two numbers between the arrays: 6 and 12.
6 % 2 = 0, 6 % 6 = 0, 24 % 6 = 0 and 36 % 6 = 0 for the first value.
12 % 2 = 0, 12 % 6 = 0 and 24 % 12 = 0, 36 % 12 = 0 for the second value. Return 2.

"""

def betweenTwoSets(a, b):
    min_num = max(a)
    max_num = min(b)
    
    factorsOf = []
    for i in range(min_num, max_num + 1):
        continue_outer = False

        for factorOf in a:
            if i % factorOf != 0:
                continue_outer = True
                break

        if continue_outer:
            continue

        factorsOf.append(i)

    factors = []    
    for factorOf in factorsOf:
        continue_outer = False

        for factor in b:
            if factor % factorOf != 0:
                continue_outer = True
                break

        if continue_outer:
            continue

        factors.append(factorOf)

    return len(factors)

betweenTwoSets([2, 4], [16, 32, 96]) # 3
betweenTwoSets([3, 4], [24, 48]) # 2
