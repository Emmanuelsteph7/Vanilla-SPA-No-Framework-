import { routes } from "./routes.js";
import {
  HomeView,
  AboutView,
  ContactView,
  NotFoundView,
  LoginView,
  BlogsView,
} from "../views/index.js";

export const routerConfig = [
  { path: routes.HOME, view: HomeView },
  { path: routes.ABOUT, view: AboutView },
  { path: routes.CONTACT, view: ContactView },
  { path: routes.NOTFOUND, view: NotFoundView },
  { path: routes.LOGIN, view: LoginView },
  { path: routes.BLOGS, view: BlogsView },
];
