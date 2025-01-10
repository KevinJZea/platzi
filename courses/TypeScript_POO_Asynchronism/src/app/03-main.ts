import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = new ProductHttpService();

  console.log('--'.repeat(10));
  console.log('getAll');

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map((product) => product.price));

  console.log('--'.repeat(10));
  console.log('update');

  const productId = products[0].id;
  await productService.update(productId, {
    price: 10000,
    title: 'New title',
    description: 'New description',
  });

  console.log('--'.repeat(10));
  console.log('findOne');

  const product = await productService.findOne(productId);
  console.log(product);
})();
