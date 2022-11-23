import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, handleMovieSave, handleMovieDelete, savedMovies }) {
  return (
    <div className="movies-card-list">
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
