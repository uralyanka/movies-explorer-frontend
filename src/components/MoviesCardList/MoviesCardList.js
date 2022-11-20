import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, handleMovieSave }) {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__grid-container">
        {movies?.map((movie) => {
          return (
            <MoviesCard
              key={movie._id}
              movie={movie}
              handleMovieSave={handleMovieSave}
            />
          );
        })}
        ;
      </ul>
      <button className="button movies-card-list__btn">Ещё</button>
    </div>
  );
}
