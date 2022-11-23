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
  isLoading,
  searchedMovies,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
  handleSearchSubmit,
  searchText,
  searchDataText,
  moviesList,
}) {
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
    localStorage.setItem('isSwitch', JSON.stringify(!isSelectedShortMovie))
    // console.log(localStorage.isSwitch);
  }

  const movies = isSelectedShortMovie
    ? searchedMovies.filter((m) => m.duration < 40)
    : searchedMovies;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm handleSearchSubmit={handleSearchSubmit} searchDataText={searchDataText} />
        <SearchFormFilter
          handleChangeShortMovie={handleChangeShortMovie}
          isSelectedShortMovie={isSelectedShortMovie}
        />
        {isLoading && <Preloader />}
        <MoviesCardList
          movies={movies}
          moviesList={moviesList}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          savedMovies={savedMovies}
          searchText={searchText}
        />
      </main>
      <Footer />
    </>
  );
}
