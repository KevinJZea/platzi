class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['label', 'parrafo', 'img'];
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    console.log({ attribute, oldValue, newValue });

    if (MyElement.observedAttributes.includes(attribute)) {
      this[attribute] = newValue;
    }
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>${this.label}</h2>
        <div>
          <p>${this.parrafo}</p>
          <img src=${this.img} />
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>
      h2 {
        color: red;
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
}

customElements.define('my-element', MyElement);
