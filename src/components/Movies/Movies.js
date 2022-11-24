import { useState, useEffect } from "react";
import useWindowInnerWidth from "../../hooks/useWindowInnerWidth";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchFormFilter from "../SearchFormFilter/SearchFormFilter";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/MoviesApi";

export default function Movies({
  isLoggedIn,
  handleMovieSave,
  savedMovies,
  handleSearchSubmit,
}) {
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const localStorageData = JSON.parse(localStorage.getItem("localStorageData"));
  const [searchDataText, setSearchDataText] = useState("");
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  const [cardQuantity, setCardQuantity] = useState(0);
  const [moreCardQuantity, setMoreCardQuantity] = useState(0);
  const windowWidth = useWindowInnerWidth();

  useEffect(() => {
    if (localStorageData) {
      setSearchDataText(localStorageData.search);
      setSearchedMovies(localStorageData.movies);
      // console.log(localStorageData);
      if (localStorageData.movies.length === 0) {
        setSearchText("Ничего не найдено");
      }
    }
    if (localStorage) {
      setIsSelectedIsShortMovie(JSON.parse(localStorage.getItem("isSwitch")));
      // console.log(localStorage.isSwitch);
    }
  }, []);

  // Поиск фильмов с api
  function handleSearchSubmit(values) {
    setSearchText("");
    if (allMovies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then((movies) => {
          setAllMovies(movies);
          searchMovies(movies, values);
        })
        .catch((err) => {
          console.log(err);
          setSearchText(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      searchMovies(allMovies, values);
    }
  }

  function getSearchMovieList(movieList, values) {
    return movieList.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(values.toLowerCase());
    });
  }

  function searchMovies(movies, values) {
    const searchedMovies = getSearchMovieList(movies, values);
    const viewMovies = searchedMovies.slice(0, cardQuantity);
    const localStorageData = {
      search: values,
      movies: searchedMovies,
    };
    localStorage.setItem("localStorageData", JSON.stringify(localStorageData));
    // console.log(localStorageData)
    setSearchedMovies(searchedMovies);
    console.log(searchedMovies.length);
    setMoviesList(viewMovies);
    if (searchedMovies.length === 0) {
      setSearchText("Ничего не найдено");
    }
  }

  // Свитч Короткометражки
  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
    localStorage.setItem("isSwitch", JSON.stringify(!isSelectedShortMovie));
    // console.log(localStorage.isSwitch);
  }

  const movies = isSelectedShortMovie
    ? moviesList.filter((m) => m.duration < 40)
    : moviesList;

  // Выравнивание по рядам + кнопка Еще
  useEffect(() => {
    // Ширина 1280px — 12 карточек по 3 в ряд. Кнопка «Ещё» загружает по 3 карточки.
    if (windowWidth >= 900) {
      setCardQuantity(12);
      setMoreCardQuantity(3);
      return;
    }
    // Ширина 768px — 8 карточек по 2 в ряд. Кнопка «Ещё» загружает по 2 карточки.
    if (windowWidth > 550) {
      setCardQuantity(8);
      setMoreCardQuantity(2);
      return;
    }
    // Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки.
    setCardQuantity(5);
    setMoreCardQuantity(5);
  }, [windowWidth]);

  useEffect(() => {
    if (cardQuantity && localStorageData) {
      setSearchedMovies(localStorageData.movies);
      setMoviesList(localStorageData.movies.slice(0, cardQuantity));
    }
  }, [cardQuantity]);

  function handleMoreMovies() {
    setCardQuantity(cardQuantity + moreCardQuantity);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          searchDataText={searchDataText}
        />
        <SearchFormFilter
          handleChangeShortMovie={handleChangeShortMovie}
          isSelectedShortMovie={isSelectedShortMovie}
        />
        {isLoading && <Preloader />}
        <MoviesCardList
          movies={movies}
          searchedMovies={searchedMovies}
          handleMovieSave={handleMovieSave}
          savedMovies={savedMovies}
          searchText={searchText}
          handleMoreMovies={handleMoreMovies}
        />
      </main>
      <Footer />
    </>
  );
}
