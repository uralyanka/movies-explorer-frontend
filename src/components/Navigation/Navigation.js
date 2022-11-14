import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ isOpen, onClose }) {
  return (
    <div className={`navigation ${isOpen && "navigation_opened"}`}>
      <div className="navigation__container">
        <button
          className="button navigation__close-btn"
          type="button"
          onClick={onClose}
        ></button>

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
            <button
              className="button navigation__profile-btn"
              type="button"
            ></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
