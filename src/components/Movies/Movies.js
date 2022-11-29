import { useState, useEffect } from "react";
import useWindowInnerWidth from "../../hooks/useWindowInnerWidth";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchFormFilter from "../SearchFormFilter/SearchFormFilter";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {
  SEARCH_ZERO_TEXT,
  SEARCH_ERROR_TEXT,
  WINDOW_WIDTH_MAX,
  CARD_QUANTITY_MAX,
  MORE_CARD_QUANTITY_MAX,
  WINDOW_WIDTH_MID,
  CARD_QUANTITY_MID,
  MORE_CARD_QUANTITY_MID,
  CARD_QUANTITY_MIN,
  MORE_CARD_QUANTITY_MIN,
  DURATION_SHORT,
} from "../../utils/constants";
import "./Movies.css";

export default function Movies({ isLoggedIn, savedMovies, setSavedMovies }) {
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const localStorageData = JSON.parse(localStorage.getItem("localStorageData"));
  const [searchDataText, setSearchDataText] = useState("");
  const [searchErrorText, setSearchErrorText] = useState("");
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  const [cardQuantity, setCardQuantity] = useState(0);
  const [moreCardQuantity, setMoreCardQuantity] = useState(0);
  const windowWidth = useWindowInnerWidth();

  // console.log(savedMovies);

  useEffect(() => {
    if (localStorageData) {
      setSearchDataText(localStorageData.search);
      setSearchedMovies(localStorageData.movies);
      if (localStorageData.movies.length === 0) {
        setSearchText(SEARCH_ZERO_TEXT);
      }
    }
    if (localStorage) {
      setIsSelectedIsShortMovie(JSON.parse(localStorage.getItem("isSwitch")));
    }
  }, []);

  // Поиск фильмов с api
  function handleSearchSubmit(values) {
    setSearchErrorText("");
    setSearchText("");
    // console.log(allMovies.length);
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
          setSearchText(SEARCH_ERROR_TEXT);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      // Для повторного поиска без запроса на сервер
      searchMovies(allMovies, values);
    }
  }

  function getSearchMovieList(movies, values) {
    return movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(values.toLowerCase());
    });
  }

  function searchMovies(movies, values) {
    const searchedMovies = getSearchMovieList(movies, values);
    const viewMovies = searchedMovies.slice(0, cardQuantity);

    const localStorageData = { search: values, movies: searchedMovies };
    localStorage.setItem("localStorageData", JSON.stringify(localStorageData));

    setSearchedMovies(searchedMovies);
    // console.log(searchedMovies);
    setMoviesList(viewMovies);
    if (searchedMovies.length === 0) {
      setSearchText(SEARCH_ZERO_TEXT);
    }
  }

  // Свитч Короткометражки
  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
    localStorage.setItem("isSwitch", JSON.stringify(!isSelectedShortMovie));
  }

  const movies = isSelectedShortMovie
    ? moviesList.filter((m) => m.duration < DURATION_SHORT)
    : moviesList;

  // Выравнивание по рядам + кнопка Еще
  useEffect(() => {
    if (windowWidth >= WINDOW_WIDTH_MAX) {
      setCardQuantity(CARD_QUANTITY_MAX);
      setMoreCardQuantity(MORE_CARD_QUANTITY_MAX);
      return;
    }
    if (windowWidth > WINDOW_WIDTH_MID) {
      setCardQuantity(CARD_QUANTITY_MID);
      setMoreCardQuantity(MORE_CARD_QUANTITY_MID);
      return;
    }
    setCardQuantity(CARD_QUANTITY_MIN);
    setMoreCardQuantity(MORE_CARD_QUANTITY_MIN);
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

  // Сохранение фильма
  function handleMovieSave(movie) {
    mainApi
      .saveMovie(movie)
      .then((newSavedMovie) => {
        console.log(newSavedMovie);
        setSavedMovies([...savedMovies, newSavedMovie]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
      <main className="movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          searchErrorText={searchErrorText}
          setSearchErrorText={setSearchErrorText}
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
          handleMovieDelete={handleMovieDelete}
          savedMovies={savedMovies}
          searchText={searchText}
          handleMoreMovies={handleMoreMovies}
        />
      </main>
      <Footer />
    </>
  );
}
