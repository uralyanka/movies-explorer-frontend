import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderLogIn.css";
import logo from "../../images/logo.svg";

export default function HeaderLogIn({ onNavigation }) {
  return (
    <div className="header__content">
      <Link to="/" className="header__logo-link">
        <img alt="Лого сайта" className="header__logo" src={logo} />
      </Link>

      <div className="header__movie-links">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? "link header__movie-link header__movie-link_active"
              : "link header__movie-link"
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            isActive
              ? "link header__movie-link header__movie-link_active"
              : "link header__movie-link"
          }
        >
          Сохранённые фильмы
        </NavLink>
      </div>

      <div className="header__profile-links">
        <NavLink to="/profile" className="link header__profile-link">
          Аккаунт
        </NavLink>
        <NavLink to="/profile" className="header__profile-link">
          <button className="button header__profile-btn" type="button"></button>
        </NavLink>
      </div>

      <div className="header__navigation">
        <button
          className="button header__navigation-btn"
          type="button"
          onClick={onNavigation}
        ></button>
      </div>
    </div>
  );
}
