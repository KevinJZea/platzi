/* 

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

*/

function countingValleys(steps: number, path: string): number {
  let altitude = 0,
    isInValley = false,
    valleys = 0;

  for (let i = 0; i < steps; i++) {
    const step = path[i] as 'D' | 'U';

    if (step === 'D') altitude--;
    else if (step === 'U') altitude++;

    if (altitude < 0 && !isInValley) {
      isInValley = true;
      valleys++;
    }

    if (altitude === 0 && isInValley) {
      isInValley = false;
    }
  }

  return valleys;
}

countingValleys(8, 'UDDDUDUU'); // 1
countingValleys(12, 'DDUUDDUDUUUD'); // 2

// AI

function countingValleys2(steps: number, path: string): number {
  let altitude = 0;
  let valleys = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      altitude++;
      // Me: If altitude is reached from below, it means hiker comes from valley
      if (altitude === 0) {
        valleys++;
      }
    } else {
      altitude--;
    }
  }

  return valleys;
}
