import React from "react";
import "./Header.css";
import { Link, Routes, Route } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img alt="Лого сайта" className="header__logo" src={logo} />
      </Link>

      <div className="header__links">
        <Link to="/signup" className="link header__link">
          Регистрация
        </Link>
        <Link to="/signin" className="button header__button">
          Войти
        </Link>
      </div>

      <Routes>
        <Route path="/signin" element={<Link to="/signup" className="link header__link">Регистрация</Link>}/>
        <Route path="/signup" element={<Link to="/signin" className="button header__button">Войти</Link>}/>
      </Routes>
    </header>
  );
}
