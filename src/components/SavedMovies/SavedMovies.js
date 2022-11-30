import { useState, useEffect } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchFormFilter from "../SearchFormFilter/SearchFormFilter";
import Footer from "../Footer/Footer";
import mainApi from "../../utils/MainApi";
import { SEARCH_ZERO_TEXT, DURATION_SHORT } from "../../utils/constants"

export default function SavedMovies({
  isLoggedIn,
  savedMovies,
  setSavedMovies,
}) {
  const [moviesList, setMoviesList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchErrorText, setSearchErrorText] = useState("");
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  useEffect(() => {
    setMoviesList(savedMovies);
  }, [savedMovies]);

  function getSearchMovieList(movies, values) {
    return movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(values.toLowerCase());
    });
  }

  function handleSearchSubmit(values) {
    setSearchErrorText("");
    setSearchText("");
    const searchedSavedMovies = getSearchMovieList(savedMovies, values);

    setMoviesList(searchedSavedMovies);
    if (searchedSavedMovies.length === 0) {
      setSearchText(SEARCH_ZERO_TEXT);
    }
  }

  // Свитч Короткометражки
  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
  }

  const movies = isSelectedShortMovie
    ? moviesList.filter((m) => m.duration < DURATION_SHORT)
    : moviesList;

  // Удаление фильма
  function handleMovieDelete(movie) {
    console.log(movie);
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((m) => m._id !== movie._id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          searchErrorText={searchErrorText}
          setSearchErrorText={setSearchErrorText}
        />
        <SearchFormFilter
          handleChangeShortMovie={handleChangeShortMovie}
          isSelectedShortMovie={isSelectedShortMovie}
        />
        <MoviesCardList
          movies={movies}
          handleMovieDelete={handleMovieDelete}
          searchText={searchText}
        />
      </main>
      <Footer />
    </>
  );
}
