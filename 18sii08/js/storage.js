import Cookies from "js-cookie";
export const storage = {
  saveCode(code) {
    Cookies.set("code", code);
  },
  getCode() {
    return Cookies.get("code");
  },
};
