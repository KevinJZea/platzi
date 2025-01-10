import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Producto 1',
  price: 1000,
  description: 'Bla bla bla',
  images: [],
  categoryId: 12,
});

const products = productService.getAll();
const product1ID = products[0].id;

productService.update(product1ID, { title: 'Cambiar nombre' });

const rta = productService.findOne(product1ID);
console.log(rta);
