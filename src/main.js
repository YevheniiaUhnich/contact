import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { registerUserService } from "./js/api.js";

const loginForm = document.querySelector(".login-form");
const registerBtn = document.querySelector(".sign-up-btn");


async function registerUser(event) {
    event.preventDefault();
    const { email, password, name} = event.currentTarget.elements;
     const response = await registerUserService({
        email: email.value,
        password: password.value,
        name: name.value
    })
    console.log(response);
    localStorage.setItem('token', response.token);
}

function openModal() {
instanceRegister.show();
const registerForm = document.querySelector(".register-form");
registerForm.addEventListener("submit", registerUser)
}

const instanceRegister = basicLightbox.create(
    document.querySelector('#register')
  );

  registerBtn.addEventListener("click", openModal)