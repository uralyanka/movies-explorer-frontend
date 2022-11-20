import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies }) {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__grid-container">
        {movies?.map((movie) => {
          return (
            <MoviesCard
              key={movie._id}
              movie={movie}
              // movieTitle="33 слова о дизайне"
              // movieDuration="1ч 47м"
              // movieCover="https://thumbs.dfs.ivi.ru/storage37/contents/3/9/fd040abbf7d3e583f614e472105ebb.jpg"
            />
          );
        })}
        ;
      </ul>
      <button className="button movies-card-list__btn">Ещё</button>
    </div>
  );
}
