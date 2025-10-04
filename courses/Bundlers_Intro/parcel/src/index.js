const $app = document.getElementById('app');
const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10';

async function main() {
  const response = await fetch(API);
  const products = await response.json();

  const output = products
    ?.map(
      (product) => `
        <article class="Card">
          <img src="${product.images[0]}" />
          <h2>${product.title} <small>Price: $${product.price}</small></h2>
        </article>
      `
    )
    .join('');

  const newItem = document.createElement('section');
  newItem.classList.add('Items');
  newItem.innerHTML = output;
  $app.appendChild(newItem);
}

document.addEventListener('DOMContentLoaded', main);
