"""

You have two strings of lowercase English letters. You can perform two types of operations on the first string:

1. Append a lowercase English letter to the end of the string.
2. Delete the last character of the string. Performing this operation on an empty string results in an empty string.

Given an integer, k, and two strings, s and t,
determine whether or not you can convert s to t by performing exactly k of the above operations on s.
If it's possible, print Yes. Otherwise, print No.

Example. s = [a, b, c]
t = [d, e, f]
k = 6

To convert s to t, we first delete all of the characters in 3 moves.
Next we add each of the characters of t in order. On the 6th move, you will have the matching string. Return Yes.

If there were more moves available, they could have been eliminated by performing multiple deletions on an empty string.
If there were fewer than 6 moves, we would not have succeeded in creating the new string.

"""

def appendAndDelete(s, t, k):
    if len(s) + len(t) <= k:
        return 'Yes'
    
    commonCharacters = 0
    min_length = min(len(s), len(t))
    for i in range(min_length):
        if s[i] == t[i]:
            commonCharacters += 1
        else:
            break
     
    diffS = len(s) - commonCharacters
    diffT = len(t) - commonCharacters
    
    if diffS + diffT == k:
        return 'Yes'
    
    if k >= diffS + diffT and (k - (diffS + diffT)) % 2 == 0:
        return 'Yes'
    
    return 'No'

# AI

def appendAndDelete(s: str, t: str, k: int) -> str:
    if len(s) + len(t) <= k:
        return "Yes"

    common_characters = 0

    min_length = min(len(s), len(t))
    for i in range(min_length):
        if s[i] == t[i]:
            common_characters += 1
        else:
            break

    diff_s = len(s) - common_characters
    diff_t = len(t) - common_characters

    if diff_s + diff_t == k:
        return "Yes"

    if k >= diff_s + diff_t and (k - (diff_s + diff_t)) % 2 == 0:
        return "Yes"

    return "No"


def append_and_delete(s: str, t: str, k: int) -> str:
    m, n = len(s), len(t)
    p = 0
    while p < min(m, n) and s[p] == t[p]:
        p += 1
    min_ops = (m - p) + (n - p)
    if k >= m + n:
        return "Yes"
    if k >= min_ops and (k - min_ops) % 2 == 0:
        return "Yes"
    return "No"
