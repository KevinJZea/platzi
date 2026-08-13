"""

Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given q queries in the form of x, y, and z representing the respective positions for cats A and B,
and for mouse C. Complete the function catAndMouse to return the appropriate answer to each query,
which will be printed on a new line.

- If cat A catches the mouse first, print Cat A.
- If cat B catches the mouse first, print Cat B.
- If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

Example
x = 2
y = 5
z = 4

The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4.
Cat B, at position 5 will arrive first since it is only 1 unit away while the other is 2 units away. Return 'Cat B'.

"""

def catAndMouse(x, y, z):
    diffA = abs(z - x)
    diffB = abs(z - y)
    
    return "Mouse C" if diffA == diffB else ("Cat A" if diffA < diffB else "Cat B")

catAndMouse(1, 2, 3); # Cat B
catAndMouse(1, 3, 2); # Mouse C

# AI

def catAndMouse(x, y, z):
    dist_a = abs(x - z)
    dist_b = abs(y - z)
    
    if dist_a < dist_b:
        return "Cat A"
    elif dist_b < dist_a:
        return "Cat B"
    else:
        return "Mouse C"
