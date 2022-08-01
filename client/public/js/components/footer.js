import { routes } from "../navigations/routes.js";

export const footer = () => {
  return `
  <footer class="footer">
  <div class="footer__container container">
    <div class="footer__top">
      <div class="footer__brand">
        <a class="footer__brandLink" href="${routes.HOME}" data-link
          ><img class="footer__logo" src="/public/assets/images/brand.png" alt="logo" /></a
        >
      </div>
    </div>
    <div class="footer__bottom">
      copyright @ 2022. All rights reserved.
    </div>
  </div>
</footer>
    `;
};
