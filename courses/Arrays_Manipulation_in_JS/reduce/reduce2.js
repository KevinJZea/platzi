const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }
  return obj;
}, {});

console.log("RTA", rta);
console.log("Original", items);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const reto = data.reduce((obj, item) => {
  const level = item.level;
  if (!obj[level]) {
    obj[level] = 1;
  } else {
    obj[level] += 1;
  }
  return obj;
}, {});

console.log("Reto", reto);
