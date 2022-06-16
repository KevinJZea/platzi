// n kids are sitting in a circle.
// k toys available to distribute.
// i position to start from.

const kidsToys = (numberOfKids, numberOfToys, initialPosition) => {
  if (numberOfKids === numberOfToys) return initialPosition;

  while (numberOfKids < numberOfToys) {
    numberOfToys -= numberOfKids;
  }

  if (numberOfToys + initialPosition - 1 > numberOfKids)
    return numberOfToys + initialPosition - 1 - numberOfKids;

  return numberOfToys + initialPosition - 1;
};

console.log(kidsToys(3, 10, 3));
