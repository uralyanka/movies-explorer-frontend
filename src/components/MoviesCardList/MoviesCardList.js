import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


export default function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__grid-container">
        <MoviesCard
          movieTitle="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieCover="https://thumbs.dfs.ivi.ru/storage37/contents/3/9/fd040abbf7d3e583f614e472105ebb.jpg"
        />
        <MoviesCard
          movieTitle="Гельветика"
          movieDuration="1ч 20м"
          movieCover="https://design-mate.ru/upload/images/post/post_1465_p2.jpg"
        />
        <MoviesCard
          movieTitle="Баухаус: лицо двадцатого века"
          movieDuration="0ч 50м"
          movieCover="https://designer.kz/wp-content/uploads/2019/12/beautiful_loosers.jpg"
        />
        <MoviesCard
          movieTitle="Почему человек творит?"
          movieDuration="2ч 13м"
          movieCover="https://design-mate.ru/upload/images/post/post_1465_p4.jpg"
        />
        <MoviesCard
          movieTitle="Лестница в небо"
          movieDuration="3ч 20м"
          movieCover="https://design-mate.ru/upload/images/post/post_1465_p5.jpg"
        />
        <MoviesCard
          movieTitle="Айрис"
          movieDuration="1ч 50м"
          movieCover="https://design-mate.ru/upload/images/post/post_1465_p6.jpg"
        />
      </ul>
      <button className="button movies-card-list__btn">Ещё</button>

    </div>
          
  );
}
