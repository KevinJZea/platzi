import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  return products.reduce((sum, product) => sum + product.stock, 0);
};
