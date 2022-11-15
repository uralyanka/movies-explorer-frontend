import React from "react";
import "./MoviesCardList.css";

export default function MoviesCardList({ children }) {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__grid-container">{children}</ul>
      <button className="button movies-card-list__btn">Ещё</button>
    </div>
  );
}
