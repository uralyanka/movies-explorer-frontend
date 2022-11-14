import React from "react";
import { useState } from "react";
import "./Header.css";
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import HeaderLogOff from "../HeaderLogOff/HeaderLogOff";
import Navigation from "../Navigation/Navigation";

export default function Header( { isLoggedIn }) {
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
    <header className="header">
      {isLoggedIn ?  <HeaderLogIn onNavigation={handleNavigationClick} /> : <HeaderLogOff />}
      <Navigation isOpen={isNavigationOpen} onClose={closeAllPopups} />
    </header>
  );
}
