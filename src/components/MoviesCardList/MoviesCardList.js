import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({
  movies,
  searchedMovies,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
  searchText,
  handleMoreMovies,
}) {
  const location = useLocation();
  // console.log(movies.length);
  // console.log(searchedMovies.length);
  return (
    <div className="movies-card-list">
      {searchText && (
        <p className="movies-card-list__search-text">{searchText}</p>
      )}
      <ul className="movies-card-list__grid-container">
        {movies?.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              handleMovieSave={handleMovieSave}
              handleMovieDelete={handleMovieDelete}
              savedMovies={savedMovies}
            />
          );
        })}
      </ul>
      {location.pathname !== "/saved-movies" &&
        movies.length > 3 &&
        movies.length !== searchedMovies.length && (
          <button
            type="button"
            aria-label="Показать еще фильмы"
            className="button movies-card-list__btn"
            onClick={handleMoreMovies}
          >
            Ещё
          </button>
        )}
    </div>
  );
}
