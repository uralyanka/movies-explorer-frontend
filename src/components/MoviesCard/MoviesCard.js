import "./MoviesCard.css";

export default function MoviesCard({ movie }) {
  const moviesApiUrl = "https://api.nomoreparties.co";

  function minutesToHours(minutes) {
    const hours = Math.trunc(minutes / 60);
    const min = minutes % 60;
    const result = hours > 0 ? `${hours}ч ${min}м` : `${min}м`;

    return result;
  }

  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__title-container">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <span className="movies-card__duration">
            {minutesToHours(movie.duration)}
          </span>
        </div>
        <button className="button movie-card__save-btn" type="button"></button>
      </div>
      <a
        className="link movies-card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__cover"
          src={`${moviesApiUrl}${movie.image.url}`}
          alt="Обложка фильма"
        />
      </a>
    </li>
  );
}
