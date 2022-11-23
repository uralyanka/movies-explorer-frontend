import { useState } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchFormFilter from "../SearchFormFilter/SearchFormFilter";
// import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  isLoggedIn,
  savedMovies,
  handleMovieDelete,
}) {
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
    localStorage.setItem('isSwitch', JSON.stringify(!isSelectedShortMovie))
  }

  const movies = isSelectedShortMovie ? savedMovies.filter((m) => m.duration < 40) : savedMovies;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm />
        <SearchFormFilter handleChangeShortMovie={handleChangeShortMovie} isSelectedShortMovie={isSelectedShortMovie} />
        <MoviesCardList
          movies={movies}
          handleMovieDelete={handleMovieDelete}
        />
        {/* <Preloader /> */}
      </main>
      <Footer />
    </>
  );
}
