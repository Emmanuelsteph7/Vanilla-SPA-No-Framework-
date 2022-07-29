import { AbstractView } from "./abstractView.js";

export class LoginView extends AbstractView {
  constructor() {
    super();
    this.setTitle("Login");
  }

  pageScript() {
    const loginForm = document.querySelector(".login__form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      console.log("val", payload);
    };
    loginForm?.addEventListener("submit", handleSubmit);
  }

  async getHtml() {
    const data = `
    <div class="login">
        <form class="login__form">
        <div class="login__formField formField">
            <label for="" class="login__formLabel formField__label">Email</label>
            <input id="email" class="login__formInput formField__input" type="email" />
        </div>
        <div class="login__formField formField">
            <label for="" class="login__formLabel formField__label">Password</label>
            <input id="password" class="login__formInput formField__input" type="password" />
        </div>
        <div class="login__btnDiv">
            <button type="submit" class="login__btn btn btn--full">Login</button>
        </div>
        </form>
    </div>`;
    return data;
  }
}
