import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import profile from "../../images/profile.svg";

export default function Navigation() {
  return (
    <nav className="navigation">
        <div className="navigation__content">
      <div className="navigation__nav-links">
        <NavLink to="/movies" className="link nav__link">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="link nav__link">
          Сохранённые фильмы
        </NavLink>
      </div>

      <div className="navigation__profile-links">

      <Link to="/profile" className="link navigation__profile-link">
          Аккаунт
      </Link>
      <Link to="/profile" className="navigation__profile-link">
        <button className="button navigation__profile-btn">
          <img
            className="navigation__logo-profile-btn"
            src={profile}
            alt="Лого профиля"
          ></img>
        </button>
      </Link>
      </div>

      </div>



      {/* <div className="header__links">
        <Link to="/signup" className="link header__link">
          Регистрация
        </Link>
        <Link to="/signin" className="button header__button">
          Войти
        </Link>
      </div>  */}
    </nav>
  );
}
