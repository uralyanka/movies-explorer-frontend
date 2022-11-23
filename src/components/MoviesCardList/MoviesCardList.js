import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, handleMovieSave, handleMovieDelete, savedMovies, searchText }) {
  return (
    <div className="movies-card-list">
      {searchText && <p className="movies-card-list__search-text">{searchText}</p>}
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
      <button className="button movies-card-list__btn">Ещё</button>
    </div>
  );
}
