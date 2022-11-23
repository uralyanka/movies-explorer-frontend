import { useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchFormFilter from "../SearchFormFilter/SearchFormFilter";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function Movies({
  isLoggedIn,
  movies,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
  handleSearchSubmit,
}) {
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
  }

  const seeMovies = isSelectedShortMovie ? movies.filter((m) => m.duration < 40) : movies;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
        <SearchFormFilter handleChangeShortMovie={handleChangeShortMovie} isSelectedShortMovie={isSelectedShortMovie}/>
        <MoviesCardList
          movies={seeMovies}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          savedMovies={savedMovies}
        />
        <Preloader />
      </main>
      <Footer />
    </>
  );
}
