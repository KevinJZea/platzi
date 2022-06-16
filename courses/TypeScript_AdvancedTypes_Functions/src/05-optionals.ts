export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock = 10
) => ({ id, stock, isNew });

const p1 = createProduct(1, false, null);
console.log(p1);
