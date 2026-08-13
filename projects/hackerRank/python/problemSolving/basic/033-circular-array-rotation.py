"""

John Watson knows of an operation called a right circular rotation on an array of integers.
One rotation operation moves the last array element to the first position and shifts all remaining elements right one.
To test Sherlock's abilities, Watson provides Sherlock with an array of integers.
Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

Example
a = [3, 4, 5]
k = 2
queries = [1, 2]

Here k is the number of rotations on a, and queries holds the list of indices to report.
First we perform the two rotations: [3, 4, 5] -> [5, 3, 4] -> [4, 5, 3]

Now return the values from the zero-based indices  and  as indicated in the queries array.
a[1] = 5
a[2] = 3

"""

def circularArrayRotation(a, k, queries):
    remainder = k % len(a)
    result = []
    for query in queries:
        index = query - remainder
        result.append(a[index])

    return result


circularArrayRotation([1, 2, 3], 2, [0, 1, 2]); # [2,3,1]

# AI

def circularArrayRotation(a, k, queries):
    n = len(a)
    if n == 0:
        return []
    k %= n
    return [a[(q - k) % n] for q in queries]
