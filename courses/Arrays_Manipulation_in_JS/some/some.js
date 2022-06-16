const nums = [1, 0, 3, 5];

let rta = false;

for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}

console.log("RTA", rta);

const rta2 = nums.some((item) => item % 2 === 0);
console.log("RTA2", rta2);

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

const rta3 = orders.some((order) => order.delivered);
console.log("RTA3", rta3);
