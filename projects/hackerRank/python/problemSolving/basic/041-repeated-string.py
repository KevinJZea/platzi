"""

There is a string, s, of lowercase English letters that is repeated infinitely many times.
Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

Example
s = 'abcac'
n = 10

The substring we consider is 'abcacabcac', the first 10 characters of the infinite string.
There are 4 occurrences of a in the substring.

"""

def repeatedString(s, n):
    if 'a' not in s:
        return 0
    
    quotient = n // len(s)
    remainder = n % len(s)
    times = s.count('a')
    
    return quotient * times + s.count('a', 0, remainder)

repeatedString('aba', 10); # 7
repeatedString('a', 1000000000000); # 1000000000000

# AI

def repeated_string(s: str, n: int) -> int:
    full, rem = divmod(n, len(s))
    return full * s.count('a') + s.count('a', 0, rem)
