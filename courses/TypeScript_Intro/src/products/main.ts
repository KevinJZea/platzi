import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: "Pro1",
  createdAt: new Date(),
  stock: 12,
});
addProduct({
  title: "Pro1",
  createdAt: new Date(),
  stock: 5,
  size: "XL",
});
