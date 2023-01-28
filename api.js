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
  return resp.json();
}

export async function fetchNameChange(newName, token) {
  try {
    let body = { name: newName };
    const resp = await fetch(URL, {
      body: JSON.stringify(body),
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.json();
  } catch (e) {
    alert(e);
  }
}
