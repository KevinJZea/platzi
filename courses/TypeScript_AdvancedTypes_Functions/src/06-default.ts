export const createProduct = (
  id: string | number,
  isNew = true,
  stock = 10
) => ({ id, stock, isNew });

const p1 = createProduct(1);
console.log(p1);
