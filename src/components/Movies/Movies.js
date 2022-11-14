import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function Movies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="movies">
        <SearchForm />
        <MoviesCardList>
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
          <MoviesCard
            movieTitle="Современный российский дизайн"
            movieDuration="1ч"
            movieCover="https://design-mate.ru/upload/images/post/post_1465_p7.jpg"
          />
          <MoviesCard
            movieTitle="Коллекционеры кроссовок"
            movieDuration="1ч 55м"
            movieCover="https://design-mate.ru/upload/images/post/post_1465_p8.jpg"
          />
          <MoviesCard
            movieTitle="Способы видеть"
            movieDuration="2ч 41м"
            movieCover="https://design-mate.ru/upload/images/post/post_1465_p9.jpg"
          />
        </MoviesCardList>
        <Preloader />
      </section>
      <Footer />
    </>
  );
}
