class MyElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement('p');
    this.template = document.createElement('div');
    this.template.innerHTML = `
        <style>
          .texto {
            color: red;
          }
          p {
            color: blue;
          }
        </style>
        <p class="texto">Hola mundo!2</p>
        <p>Texto ejemplo para la clase</p>`;
  }

  connectedCallback() {
    this.p.textContent = 'Hola mundo';
    this.appendChild(this.p);
    this.appendChild(this.template);
  }
}

customElements.define('my-element', MyElement);
