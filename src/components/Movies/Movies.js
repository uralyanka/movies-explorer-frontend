import React from "react";
import { useState } from "react";
import "./Movies.css";
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

export default function Movies() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  //Открытие попапов
  function handleNavigationClick() {
    setIsNavigationOpen(true);
  }

  //Закрытие попапов
  function closeAllPopups() {
    setIsNavigationOpen(false);
  }
  
  return (
    <section className="movies">
      <HeaderLogIn onNavigation={handleNavigationClick} />
      <Navigation isOpen={isNavigationOpen} onClose={closeAllPopups} />
      <SearchForm />
      <MoviesCardList />
      <Preloader />
      <Footer />
    </section>
  );
}
