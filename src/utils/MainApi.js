const moviesApiUrl = "https://api.nomoreparties.co";

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

  saveMovie(movie) {
    const {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
      owner
    } = movie;
    const movieId = movie.id;
    const image = `${moviesApiUrl}${movie.image.url}`;
    const thumbnail = `${moviesApiUrl}${movie.image.formats.thumbnail.url}`;

    return fetch(`${this._mainApiUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        owner,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then((res) => this._checkRes(res));
  }

  getSavedMovies() {
    return fetch(`${this._mainApiUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then((res) => this._checkRes(res));
  }

  deleteMovie(id) {
    return fetch(`${this._mainApiUrl}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then((res) => this._checkRes(res));
  }
}

export default new MainApi({
  mainApiUrl: "https://api.uralyanka.diploma.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});
