import "./MoviesCard.css";

export default function MoviesCard({ movieTitle, movieDuration, movieCover }) {
  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__title-container">
          <h2 className="movies-card__title">{movieTitle}</h2>
          <span className="movies-card__duration">{movieDuration}</span>
        </div>
        <button className="button movie-card__save-btn" type="button">
        </button>
      </div>

      <img
        className="movies-card__cover"
        src={movieCover}
        alt="Обложка фильма"
      />
    </li>
  );
}
