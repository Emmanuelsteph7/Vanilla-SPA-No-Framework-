import { AbstractView } from "./abstractView.js";

export class NotFoundView extends AbstractView {
  constructor() {
    super();
    this.setTitle("NotFound");
  }

  async getHtml() {
    return `
            <h1>This is the NotFound page</h1>
        `;
  }
}
