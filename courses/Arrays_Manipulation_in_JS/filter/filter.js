const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];

for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

console.log("New Array: ", newArray);
console.log("Original: ", words);

const rta = words.filter((item) => item.length < 6);

console.log("RTA: ", rta);
console.log("Original: ", words);

// ---------- || ----------

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

const ordersDelivered = orders.filter((order) => order.delivered);
console.log(ordersDelivered);

const search = (query) => {
  return orders.filter((order) => order.customerName.includes(query));
};

// ---------- My Project ----------

const input = document.getElementById("input");
const box = document.getElementById("box");

const createNewBox = (customerName, total, delivered) => {
  const newBox = document.createElement("article");
  const customerNameText = document.createElement("p");
  customerNameText.innerText = customerName;
  const totalText = document.createElement("p");
  totalText.innerText = total;
  const deliveredText = document.createElement("p");
  deliveredText.innerText = delivered;

  newBox.appendChild(customerNameText);
  newBox.appendChild(totalText);
  newBox.appendChild(deliveredText);
  newBox.setAttribute("class", "box");

  return newBox;
};

input.addEventListener("change", (e) => {
  console.log("OnChange");
  if (box.childElementCount > 0) {
    box.innerHTML = "";
  }
  console.log(e);
  console.log(input);
  const filteredOrders = search(input.value);
  filteredOrders.forEach((order) =>
    box.appendChild(
      createNewBox(order.customerName, order.total, order.delivered)
    )
  );
});
