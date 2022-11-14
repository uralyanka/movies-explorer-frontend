import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function Movies( { isLoggedIn }) {
  
  return (
    <section className="movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm />
      <MoviesCardList />
      <Preloader />
      <Footer />
    </section>
  );
}
