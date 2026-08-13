"""

A teacher asks the class to open their books to a page number.
A student can either start turning pages from the front of the book or from the back of the book.
They always turn pages one at a time. When they open the book, page 1 is always on the right side.

When they flip page 1, they see pages 2 and 3.
Each page except the last page will always be printed on both sides.
The last page may only be printed on the front, given the length of the book.
If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn?
They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

Example
n = 5
p = 3

Using the diagram above, if the student wants to get to page 3,
they open the book to page 1, flip 1 page and they are on the correct page.
If they open the book to the last page, page 5, they turn 1 page and are at the correct page. Return 1.

"""

def pageCount(n, p):
    if p == 1 or p == n:
        return 0
    if n % 2 == 1 and p == n - 1:
        return 0
    
    LTR = 0
    for i in range(3, n, 2):
        LTR += 1
        if i >= p:
            break

    RTL = 0
    startingPoint = n if n % 2 == 0 else n - 1
    for i in range(startingPoint, 1, -2):
        if i <= p or LTR < RTL:
            break
        RTL += 1
        
    return min(RTL, LTR)

pageCount(6, 2); # 1
pageCount(5, 4); # 0

# AI

def pageCount2(n: int, p: int) -> int:
    from_front = p // 2
    from_back = n // 2 - from_front
    return min(from_front, from_back)
