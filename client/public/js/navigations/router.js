import { routerConfig } from "./routerConfig.js";
import { routes } from "./routes.js";

export const router = async () => {
  const potentialMatches = routerConfig.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    const notFound = routerConfig.find(
      (route) => route.path === routes.NOTFOUND
    );
    match = {
      route: notFound,
      isMatch: true,
    };
  }

  const view = new match.route.view();

  // this loads the content of the page
  document.getElementById("app").innerHTML = await view.getHtml();
  // this loads any other functionality added
  // it is important it comes after the above because the contents of the page needs to be loaded first before any functionality
  view.pageScript();
};
