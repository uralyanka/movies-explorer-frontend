import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  isLoggedIn,
  movies,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm />
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
