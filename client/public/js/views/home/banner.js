import { routes } from "../../navigations/routes.js";

export const banner = () => {
  return `
  <section class="homeBanner">
      <div class="homeBanner__container container">
        <div class="homeBanner__body">
          <h1 class="homeBanner__header mainHeader">This is the header</h1>
          <h4 class="homeBanner__subHeader">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            exercitationem perferendis voluptatum libero esse. Quos saepe
            aliquid illum debitis consequatur?
          </h4>
          <div class="homeBanner__btnDiv">
            <a data-link href=${routes.BLOGS} class="homeBanner__btn btn">Go to Blogs</a>
          </div>
        </div>
      </div>
    </section>
    `;
};
