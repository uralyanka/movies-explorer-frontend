import React from "react";
import "./Movies.css";
import HeaderLogIn from '../HeaderLogIn/HeaderLogIn';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";

export default function Movies() {
  return (
    <section className="movies">
        <HeaderLogIn/>
        <SearchForm />
        <MoviesCardList />
         <Preloader />
    </section>
  );
}