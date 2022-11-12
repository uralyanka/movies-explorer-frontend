import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img alt="Лого сайта" className="header__logo" src={logo} />
      </Link>

      <Navigation />

      {/* <Routes>
        <Route path="/signin" element={<Link to="/signup" className="link header__link">Регистрация</Link>}/>
        <Route exact path="/(movies|saved-movies|profile)" element={<Navigation />
      </Routes> */}
    </header>
  );
}
