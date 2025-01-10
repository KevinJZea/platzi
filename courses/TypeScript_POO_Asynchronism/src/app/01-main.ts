import axios from 'axios';
import { Product } from './models/product.model';

(async () => {
  async function getProductsAsync(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  }

  const products = await getProductsAsync();
  console.log(products.map((product) => `${product.id} - ${product.title}`));
})();
