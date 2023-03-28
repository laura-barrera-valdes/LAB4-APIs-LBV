export default class AppCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.shadowRoot)
      this.shadowRoot.innerHTML = `
        <h1>HOLIIIIIIIIII</h1>
        <p>a card</p>
        `;
  }
}

customElements.define("app-card", AppCard);
