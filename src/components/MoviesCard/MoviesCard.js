import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

export default function MoviesCard({ movie, handleMovieSave, handleMovieDelete, savedMovies }) {
  const location = useLocation();
  const savedMovieOk = location.pathname === "/saved-movies";
  const image = !savedMovieOk
    ? `https://api.nomoreparties.co${movie.image.url}`
    : `${movie.image}`;

  function minutesToHours(minutes) {
    const hours = Math.trunc(minutes / 60);
    const min = minutes % 60;
    const result = hours > 0 ? `${hours}ч ${min}м` : `${min}м`;

    return result;
  }

  function handleSaveMovieClick() {
    handleMovieSave(movie);
    console.log(movie);
  }

  function handleDeleteSavedClick() {
    console.log(movie);
    handleMovieDelete(movie);
  }

  const isSaved = movie.id && savedMovies.some((m) => m.movieId === movie.id);

  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__title-container">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <span className="movies-card__duration">
            {minutesToHours(movie.duration)}
          </span>
        </div>
        {!savedMovieOk && (
          <button
            className={`button movie-card__save-btn ${
              isSaved ? "movie-card__save-btn_active" : ""
            }`}
            type="button"
            onClick={handleSaveMovieClick}
          ></button>
        )}
        {savedMovieOk && (
          <button
            className="button movie-card__delete-saved-btn"
            type="button"
            onClick={handleDeleteSavedClick}
          ></button>
        )}
      </div>
      <a
        className="link movies-card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movies-card__cover" src={image} alt="Обложка фильма" />
      </a>
    </li>
  );
}
