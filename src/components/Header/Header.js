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

      <Routes>
        <Route path="/signin" element={<Link to="/signup" className="link">Регистрация</Link>}/>
        <Route path="/signup" element={<Link to="/signin" className="header__button-link">Войти</Link>}/>
      </Routes>
    </header>
  );
}
