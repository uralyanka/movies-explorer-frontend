import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogOff.css";
import logo from "../../images/logo.svg";

export default function HeaderLogOff() {
  return (
    <div className="header__content">
      <Link to="/" className="header__logo-link">
        <img alt="Лого сайта" className="header__logo" src={logo} />
      </Link>

      <div className="header__sign-links">
        <Link to="/signup" className="link header__signin-link">
          Регистрация
        </Link>
        <Link to="/signin" className="button header__signup-btn">
          Войти
        </Link>
      </div>
    </div>
  );
}
