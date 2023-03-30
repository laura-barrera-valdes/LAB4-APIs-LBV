import styles from "./Card.css";
// import { loadCss } from "../../utils/styles";

export enum Attribut {
  "name" = "name",
  "gender" = "gender",
  "species" = "species",
}

class AppCard extends HTMLElement {
  name?: string;
  gender?: string;
  species?: string;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    const info: Record<Attribut, null> = {
      name: null,
      gender: null,
      species: null,
    };
    return Object.keys(info);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: Attribut,
    _: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      default:
        this[propName] = newValue;
        break;
    }
    this.render();
  }
  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/Card/Card.css">
      <div class= "card">
      <h1>${this.name}</h1>
      <h1>${this.gender}</h1>
      <h1>${this.species}</h1>
      </div>
      `;
      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);
      // const styles = this.ownerDocument.createElement("link");
      // styles.setAttribute("href", "../src/components/Card/Card.css");
      // styles.setAttribute("rel", "stylesheet");
      // this.shadowRoot?.appendChild(styles);
    }
  }
}

// if (this.shadowRoot)
//   this.shadowRoot.innerHTML = `
//     <h1>HOLIIIIIIIIII</h1>
//     <p>a card</p>
//     `;
customElements.define("app-card", AppCard);
export default AppCard;
