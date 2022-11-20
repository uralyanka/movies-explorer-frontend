import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function Movies({ isLoggedIn, movies, handleMovieSave }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList movies={movies} handleMovieSave={handleMovieSave} />
        <Preloader />
      </main>
      <Footer />
    </>
  );
}
