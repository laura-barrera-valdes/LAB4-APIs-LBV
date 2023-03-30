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
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./src/components/Card/Card.css">
      <section class= "card">
        <p>Name:</p>
        <h1>${this.name}</h1>
        </n>
        <p>Gender:</p>
        <h2>${this.gender}</h2>
        <br>
        <p>Species:</p>
        <h2>${this.species}</h2>
      </section>
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
