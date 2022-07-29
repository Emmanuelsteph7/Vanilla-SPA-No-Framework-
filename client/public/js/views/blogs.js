import { routes } from "../navigations/routes.js";
import { AbstractView } from "./abstractView.js";

export class BlogsView extends AbstractView {
  constructor() {
    super();
    this.setTitle("Blogs");
  }

  async fetchPosts() {
    let resData;
    let errorStatus = false;

    this.showLoading();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      resData = await res.json();
      errorStatus = false;
    } catch (error) {
      errorStatus = true;
      console.log(error);
    }

    return { resData, errorStatus };
  }

  async getHtml() {
    const { resData: posts, errorStatus } = await this.fetchPosts();

    const mappedPosts =
      posts &&
      posts.map(
        (post) => `
        <a href="/blog/${post.id}" data-link>
            <div class="posts__div">
                <h3 class="posts__header">${post.title}</h3>
                <p class="posts__body">${post.body}</p>
            </div>
        </a>
    `
      );

    const data = errorStatus
      ? `<div class="container">Something went wrong!!!</div>`
      : `
        <div class="posts container">
            <div class="posts__container">
                ${mappedPosts.join(" ")}
            </div>
        </div>`;
    return location.pathname === routes.BLOGS
      ? this.getLayout(data)
      : document.getElementById("app").innerHTML;
  }
}
