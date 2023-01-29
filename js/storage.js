import Cookies from 'js-cookie';

export function setCookie(value) {
  event.preventDefault();
  Cookies.set('key', value, { expires: 7 });

}

export function getCookie(key) {
  return Cookies.get(key);
}
