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
}) {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm />
        <SearchFormFilter />
        <MoviesCardList
          movies={movies}
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
