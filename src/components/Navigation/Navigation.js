import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import profile from "../../images/profile.svg";
import closebtn from "../../images/closebtn.svg";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__container">
        <button className="button navigation__close-btn">
          <img
            className="navigation__logo-close-btn"
            src={closebtn}
            alt="Кнопка для закрытия"
          ></img>
        </button>

        <nav className="navigation_main-links">
          <NavLink to="/" className="link navigation_link">
            Главная
          </NavLink>
          <NavLink to="/movies" className="link navigation_link">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="link navigation_link">
            Сохранённые фильмы
          </NavLink>
        </nav>

        <div className="navigation__profile-links">
          <NavLink to="/profile" className="link navigation__profile-link">
            Аккаунт
          </NavLink>
          <NavLink to="/profile" className="navigation__profile-link">
            <button className="button navigation__profile-btn">
              <img
                className="navigation__logo-profile-btn"
                src={profile}
                alt="Лого профиля"
              ></img>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
