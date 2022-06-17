import { addProduct } from "./products/product.service";

addProduct({
  id: "1",
  title: "P1",
  createdAt: new Date(),
  stock: 90,
  size: "L",
  category: {
    id: 2,
    name: "New",
  },
});
