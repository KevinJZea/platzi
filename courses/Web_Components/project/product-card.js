class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['brand', 'collection', 'description', 'image', 'label', 'price'];
  }

  attributeChangedCallback(attribute, _, newValue) {
    if (ProductCard.observedAttributes.includes(attribute)) {
      this[attribute] = newValue;
    }
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <article>
        <div class="background">
          <span class="brand">${this.brand}</span>
          <picture class="image-container">
            <img src="${this.image}" alt="" />
          </picture>
        </div>
        <div class="content">
          <div class="title-container">
            <h3>${this.label}</h3>
            <span>${this.collection.toLocaleUpperCase()} COLLECTION</span>
          </div>

          <p class="description">${this.description}</p>

          <div class="price-cta-container">
            <span class="price">${this.formatCurrency(this.price)}</span>
            <button class="cta">Buy Now</button>
          </div>
        </div>
      </article>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
      <style>
        :host {
          --bg-primary: #515fa9;
          --bg-secondary: #fefefe;
          --primary-color: #48569b;
          --secondary-color: #969496;
        }
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .background {
          background-color: var(--bg-primary);
        }
        .brand {
          display: inline-block;
          color: #000;
          opacity: 0.1;
          font-size: 5rem;
          font-weight: bold;
          padding-top: 1rem;
          padding-left: 1rem;
        }
        .image-container {
          position: relative;
          display: flex;
          justify-content: center;
          margin: -2rem 0 -2.5rem;
        }
        .image-container img {
          display: inline-block;
          width: 85%;
        }
        .content {
          background-color: var(--bg-secondary);
          padding: 1.5rem 1rem;
        }
        .title-container {
          display: flex;
          column-gap: 2rem;
          row-gap: 0.25rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .title-container h3 {
          font-size: 1.75rem;
        }
        .title-container span {
          font-size: 0.75rem;
          color: var(--secondary-color);
        }
        .description {
          margin: 1rem 0;
          font-size: 0.75rem;
        }
        .price-cta-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .price {  
          color: var(--secondary-color);
        }
        .cta {
          background-color: var(--bg-primary);
          border: none;
          padding: 0.25rem 0.75rem;
          color: var(--bg-secondary);
          border-radius: 0.75rem;
        }
      </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  }
}

customElements.define('product-card', ProductCard);
