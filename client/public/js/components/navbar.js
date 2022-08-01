import { routes } from "../navigations/routes.js";

export const navbar = () => {
  return `
    <header class="header">
    <div class="header__container container">
      <div class="header__brand">
        <a class="header__brandLink" href="${routes.HOME}" data-link>
          <img class="header__logo" src="/public/assets/images/brand.png" alt="logo" />
          <span class="header__text">Blogs</span>
        </a>
      </div>
      <nav class="header__nav">
        <ul class="header__navUl">
          <li class="header__linkItem"><a class="header__link" href="${routes.HOME}" data-link>Home</a></li>
          <li class="header__linkItem"><a class="header__link" href="${routes.ABOUT}" data-link>About</a></li>
          <li class="header__linkItem"><a class="header__link" href="${routes.CONTACT}" data-link>Contact</a></li>
          <li class="header__linkItem"><a class="header__link" href="${routes.BLOGS}" data-link>Blogs</a></li>
        </ul>
      </nav>
    </div>
  </header>
    `;
};
