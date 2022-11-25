import { useState, useEffect } from "react";
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
  setSavedMovies,
  handleMovieDelete,
}) {
  const [moviesList, setMoviesList] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchDataText, setSearchDataText] = useState("");

  useEffect(() => {
    setMoviesList(savedMovies);
    setSearchedMovies(savedMovies);
  }, [savedMovies]);

  function getSearchMovieList(savedMovies, values) {
    return savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(values.toLowerCase());
    });
  }

  function handleSearchSubmit(values) {
    const searchMovies = getSearchMovieList(savedMovies, values);

    setMoviesList(searchMovies);
  }

  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
    localStorage.setItem("isSwitch", JSON.stringify(!isSelectedShortMovie));
  }

  const movies = isSelectedShortMovie
    ? moviesList.filter((m) => m.duration < 40)
    : moviesList;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          searchDataText={searchDataText}
        />
        <SearchFormFilter
          handleChangeShortMovie={handleChangeShortMovie}
          isSelectedShortMovie={isSelectedShortMovie}
        />
        <MoviesCardList movies={movies} handleMovieDelete={handleMovieDelete} />
        {/* <Preloader /> */}
      </main>
      <Footer />
    </>
  );
}
