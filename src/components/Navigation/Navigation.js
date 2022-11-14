import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import profile from "../../images/profile.svg";

export default function Navigation({ isOpen, onClose }) {
  return (
    <div className={isOpen ? `navigation navigation_opened` : `navigation`}>
      <div className="navigation__container">
        <button
          className="button navigation__close-btn"
          type="button"
          onClick={onClose}
        >
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
