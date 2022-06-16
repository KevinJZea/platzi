const rangos = ["1-5", "6-8", "9-10"];

const nums = [
  4, 5, 3, 6, 7, 8, 8, 2, 3, 5, 6, 7, 1, 2, 8, 8, 6, 5, 4, 3, 3, 5, 6, 7, 8, 9,
  7, 5, 3, 8, 4, 4, 3, 6, 6, 7, 8, 10,
];

const rta = nums.reduce(
  (obj, item) => {
    if (item >= 1 && item <= 5) obj["1-5"] += 1;
    else if (item >= 6 && item <= 8) obj["6-8"] += 1;
    else if (item >= 9 && item <= 10) obj["9-10"] += 1;
    else return 0;
    return obj;
  },
  { "1-5": 0, "6-8": 0, "9-10": 0 }
);
console.log("RTA", rta);
console.log("NUMS", nums);
