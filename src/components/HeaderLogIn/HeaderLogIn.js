import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogIn.css";
import profile from "../../images/profile.svg";
import logo from "../../images/logo.svg";

export default function HeaderLogIn({ onNavigation }) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo-link">
          <img alt="Лого сайта" className="header__logo" src={logo} />
        </Link>

        <div className="header__movie-links">
          <Link to="/movies" className="link header__movie-link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="link header__movie-link">
            Сохранённые фильмы
          </Link>
        </div>

        <div className="header__profile-links">
          <Link to="/profile" className="link header__profile-link">
            Аккаунт
          </Link>
          <Link to="/profile" className="header__profile-link">
            <button className="button header__profile-btn">
              <img
                className="header__logo-profile-btn"
                src={profile}
                alt="Лого профиля"
              ></img>
            </button>
          </Link>
        </div>

        <div className="header__navigation">
          <button
            className="button header__navigation-btn"
            type="button"
            onClick={onNavigation}
          >
          </button>
        </div>
      </div>
    </header>
  );
}
