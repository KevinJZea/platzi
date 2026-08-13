"""

An avid hiker keeps meticulous records of their hikes.
During the last hike that took exactly steps steps,
for every step it was noted if it was an uphill, U, or a downhill, D step.
Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude.
We define the following terms:

- A mountain is a sequence of consecutive steps above sea level,
starting with a step up from sea level and ending with a step down to sea level.
- A valley is a sequence of consecutive steps below sea level,
starting with a step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example
steps = 8 | path = [DDUUUUDD]

The hiker first enters a valley 2 units deep.
Then they climb out and up onto a mountain 2 units high.
Finally, the hiker returns to sea level and ends the hike.

"""

def countingValleys(steps, path):
    isValley = False
    altitude = 0
    valleys = 0
    for step in path:
        if step == "U":
            altitude += 1
        elif step == "D":
            altitude -= 1
        
        if altitude == -1 and not isValley:
            isValley = True
            valleys += 1
        elif altitude == 0 and isValley:
            isValley = False
            
    return valleys

countingValleys(8, 'UDDDUDUU'); # 1
countingValleys(12, 'DDUUDDUDUUUD'); # 2

def counting_valleys(steps: int, path: str) -> int:
    altitude = 0
    valleys = 0

    for step in path:
        if step == 'U':
            altitude += 1
            if altitude == 0:
                valleys += 1
        else:
            altitude -= 1

    return valleys
