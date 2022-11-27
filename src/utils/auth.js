const baseAuthUrl = "https://api.uralyanka.diploma.nomoredomains.icu";

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

export function register(name, email, password) {
  return fetch(`${baseAuthUrl}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkRes(res));
}

export function signin(email, password) {
  return fetch(`${baseAuthUrl}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkRes(res));
}

export function getCurrentUser() {
  return fetch(`${baseAuthUrl}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => checkRes(res));
}

export function signout() {
  return fetch(`${baseAuthUrl}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => checkRes(res));
}
