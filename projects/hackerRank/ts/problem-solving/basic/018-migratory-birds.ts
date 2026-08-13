/* 

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example
arr = [1, 1, 2, 2, 3]

There are two each of types 1 and 2, and one sighting of type 3.
Pick the lower of the two types seen twice: type 1.

*/

function migratoryBirds(arr: number[]): number {
  const sightings = arr.reduce(
    (accum, id) => {
      const strId = String(id);
      if (!accum[strId]) return { ...accum, [strId]: 1 };
      return { ...accum, [strId]: accum[strId] + 1 };
    },
    {} as Record<string, number>,
  );

  const sightingsArray = Object.entries(sightings);

  let maxSightingsIds = [sightingsArray[0][0]];
  let maxSightningsAmount = sightingsArray[0][1];

  for (let i = 1; i < sightingsArray.length; i++) {
    const sighting = sightingsArray[i];
    if (sighting[1] > maxSightningsAmount) {
      maxSightingsIds = [sighting[0]];
      maxSightningsAmount = sighting[1];
    } else if (sighting[1] === maxSightningsAmount) {
      maxSightingsIds = [...maxSightingsIds, sighting[0]];
    }
  }

  const maxSightingsNumberIds = maxSightingsIds.map(Number);

  return Math.min(...maxSightingsNumberIds);
}

migratoryBirds([1, 4, 4, 4, 5, 3]); // 4
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]); // 3

// AI

function migratoryBirds2(arr: number[]): number {
  const counts = new Map<number, number>();
  for (const bird of arr) {
    counts.set(bird, (counts.get(bird) ?? 0) + 1);
  }

  let maxCount = 0;
  let result = Infinity;
  for (const [bird, count] of counts) {
    if (count > maxCount || (count === maxCount && bird < result)) {
      maxCount = count;
      result = bird;
    }
  }
  return result;
}
