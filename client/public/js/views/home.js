import { AbstractView } from "./abstractView.js";

export class HomeView extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    const data = "<h1>This is the home page</h1>";
    return this.getLayout(data);
  }
}
