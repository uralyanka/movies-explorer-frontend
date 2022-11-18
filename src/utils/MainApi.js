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
}

export default new MainApi({
  mainApiUrl: "https://api.uralyanka.diploma.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});
