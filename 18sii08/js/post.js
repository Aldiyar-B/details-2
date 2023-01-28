const serverUrl = "https://edu.strada.one";
export async function postMail(mail) {
  const url = `${serverUrl}/api/user`;
  const user = { email: mail };
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
  } catch (err) {
    alert(`Ошибка ${err.message}`);
  }
}
export async function postName(newName) {
  const url = `${serverUrl}/api/user`;
  const name = { name: newName };
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(name),
    });
  } catch (err) {
    alert(`Ошибка ${err.message}`);
  }
}

export async function authorization(token) {
  const url = `${serverUrl}/api/user`;
  try {
    let name = { name: "Ilnaz" };
    await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(name),
    });
  } catch (err) {
    alert(`Ошибка ${err.message}`);
  }
}
