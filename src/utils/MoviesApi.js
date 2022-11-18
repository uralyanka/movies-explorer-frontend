class MoviesApi {
  constructor({ moviesApiUrl, headers }) {
    this._moviesApiUrl = moviesApiUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllMovies() {
    return fetch(this._moviesApiUrl, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkRes(res));
  }
}

export default new MoviesApi({
  moviesApiUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});
