import { router } from "./navigations/router.js";

const navigate = (url) => {
  history.pushState(null, null, url);
  router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigate(e.target.href);
    }
  });

  router();
});
