import axios from 'axios';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta1 = await productService.getAll();
  console.log(rta1.length);

  await productService.update<Product['id'], UpdateProductDto>(3, {});

  /* ----- */

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Product>(url2);
  const rta2 = await categoryService.getAll();

  console.log(rta2.length);
})();
