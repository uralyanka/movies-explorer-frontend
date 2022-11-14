import "./SavedMovies.css";
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
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList>
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
        </MoviesCardList>
        <Preloader />
      </section>
      <Footer />
    </>
  );
}
