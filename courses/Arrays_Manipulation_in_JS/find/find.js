const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 30) {
    rta = element;
    break;
  }
}

console.log("RTA", rta);

const rta2 = numbers.find((num) => num === 30);
console.log("RTA2", rta2);

// ---------- || ----------

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((product) => product.id === "🍔");
console.log("RTA3", rta3);

const rta4 = products.findIndex((product) => product.id === "🍔");
console.log("RTA4", rta4);
