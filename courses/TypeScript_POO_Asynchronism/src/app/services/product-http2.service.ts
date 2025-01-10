import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

export class ProductHttpService extends BaseHttpService<Product> {}

const url = 'https://api.escuelajs.co/api/v1/products';
const service1 = new ProductHttpService(url);
service1.getAll().then((response) => console.log(response));
