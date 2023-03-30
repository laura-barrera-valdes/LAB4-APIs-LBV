import { data_the_starwars } from "./data";
import "./components/export";
import AppCard, { Attribut } from "../src/components/Card/Card";

class AppContainer extends HTMLElement {
  cardArray: AppCard[] = [];
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const dataAsync = await data_the_starwars();
    dataAsync?.forEach((element: any) => {
      const character = this.ownerDocument.createElement("app-card") as AppCard;
      character.setAttribute(Attribut.name, element.name);
      character.setAttribute(Attribut.gender, element.gender);
      character.setAttribute(Attribut.species, element.name);
      this.cardArray.push(character);
    });
    this.render(this.cardArray);
  }

  render(cardArray: any) {
    if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
    cardArray.forEach((element: any) => {
      this.shadowRoot?.appendChild(element);
    });
  }
}

customElements.define("app-container", AppContainer);

// this.shadowRoot.innerHTML = `
// <link rel= "stylesheet" href="./src/components/Appcontainer.css">

// <h1>The Start Wars Random Api Laura Barrera Valdés</h1>
// <app-card></app-card>
// `;
