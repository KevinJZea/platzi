const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log("Original: ", orders);

const rta = orders.map((item) => item.total);
console.log("RTA: ", rta);

let tax = 10;
const rta2 = orders.map((item) => {
  return { ...item, tax: 10 };
});

console.log("RTA 2: ", rta2);
