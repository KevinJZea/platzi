const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

console.log("Products:", products);
console.log("My Products:", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex((product) => product.id === "🍔");
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}

console.log("Products:", products);
console.log("My Products:", myProducts);
console.log("-".repeat(10));

// ---------- || ----------

const otherProducts = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const updates = {
  id: "🥞",
  changes: {
    price: 200,
    description: "delicious",
  },
};

/* const productToUpdate = otherProducts.find(
  (product) => product.id === updates.id
);
const productUpdated = {
  ...productToUpdate,
  ...updates.changes,
};
console.log(productUpdated); */

const productToUpdateIndex = otherProducts.findIndex(
  (product) => product.id === updates.id
);
otherProducts[productToUpdateIndex] = {
  ...otherProducts[productToUpdateIndex],
  ...updates.changes,
};
console.log(otherProducts);
