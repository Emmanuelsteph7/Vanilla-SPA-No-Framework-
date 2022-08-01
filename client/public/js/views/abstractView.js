import { navbar, footer } from "../components/index.js";

export class AbstractView {
  constructor() {}

  setTitle(title) {
    document.title = title;
  }

  showLoading() {
    const data = "<div>loading...</div>";
    document.getElementById("app").innerHTML = this.getLayout(data);
  }

  pageScript() {}

  async getHtml() {
    return "";
  }

  getLayout(viewData) {
    const layoutHtml = `${navbar()} ${viewData} ${footer()}`;
    return layoutHtml;
  }
}
