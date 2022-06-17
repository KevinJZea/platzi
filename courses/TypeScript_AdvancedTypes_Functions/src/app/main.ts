import { faker } from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['M', 'S', 'L', 'XL']),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);
