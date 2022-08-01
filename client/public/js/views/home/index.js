import { AbstractView } from "../abstractView.js";
import { banner } from "./banner.js";

export class HomeView extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    const data = `${banner()}`;
    return this.getLayout(data);
  }
}
