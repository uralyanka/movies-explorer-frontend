import { useState, useEffect } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchFormFilter from "../SearchFormFilter/SearchFormFilter";
// import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import mainApi from "../../utils/MainApi";

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
    const searchedMovies = getSearchMovieList(savedMovies, values);

    setMoviesList(searchedMovies);
    if (searchedMovies.length === 0) {
      setSearchText("Ничего не найдено");
    }
  }

  // Свитч Короткометражки
  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
    localStorage.setItem("isSwitch", JSON.stringify(!isSelectedShortMovie));
  }

  const movies = isSelectedShortMovie
    ? moviesList.filter((m) => m.duration < 40)
    : moviesList;

  // Удаление фильма
  function handleMovieDelete(movie) {
    // console.log("Я в handleMovieDelete");
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
        {/* <Preloader /> */}
      </main>
      <Footer />
    </>
  );
}
