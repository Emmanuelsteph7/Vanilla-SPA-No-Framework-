import { AbstractView } from "./abstractView.js";

export class ContactView extends AbstractView {
  constructor() {
    super();
    this.setTitle("Contact");
  }

  async getHtml() {
    const data = "<h1>This is the contact page</h1>";
    return this.getLayout(data);
  }
}
