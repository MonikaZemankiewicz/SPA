import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  //async in case it will be loaded from the server
  async getHtml() {
    return `

        <h1>Home page</h1>

    `;
  }
}
