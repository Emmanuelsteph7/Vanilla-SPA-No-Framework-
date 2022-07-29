import { AbstractView } from "./abstractView.js";

export class AboutView extends AbstractView {
  constructor() {
    super();
    this.setTitle("About");
  }

  async getHtml() {
    const data = "<h1>This is the about page</h1>";
    return this.getLayout(data);
  }
}
