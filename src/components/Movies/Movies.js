import React from "react";
import "./Movies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";

export default function Movies() {
  return (
    <section className="movies">
        <Header/>
        <SearchForm />
{/* <MoviesCardList /> */}
         <Preloader />
    </section>
  );
}