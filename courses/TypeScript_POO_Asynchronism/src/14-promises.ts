import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }
  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('-----'.repeat(4));
  const rta = await delay(3000);
  console.log(rta);

  console.log('-----'.repeat(4));
  const rta2 = await getProducts();
  console.log(rta2.data.slice(0, 3));

  console.log('-----'.repeat(4));
  const rta3 = await getProductsAsync();
  console.log(rta3.slice(0, 3));
})();
