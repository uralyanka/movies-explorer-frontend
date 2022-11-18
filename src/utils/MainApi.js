class MainApi {
  constructor({ mainApiUrl, headers }) {
    this._mainApiUrl = mainApiUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._mainApiUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._checkRes(res));
  }

  setUserData(name, email) {
    return fetch(`${this._mainApiUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._checkRes(res));
  }
}

export default new MainApi({
  mainApiUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
