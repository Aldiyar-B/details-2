import { URL } from "./const.js";

export async function fetchAuth(data) {
  let body = { email: data };
  console.log(`email:${data}`);
  const resp = await fetch(URL, {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}
