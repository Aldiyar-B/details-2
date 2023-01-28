import { postMail } from "./post.js";
export function validation(input) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  if (isEmailValid(input.value)) {
    // postMail(input.value);
    return true;
  } else {
    input.style.borderColor = "red";
    alert("Введите корректный email");
    return false;
  }
  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }
}
