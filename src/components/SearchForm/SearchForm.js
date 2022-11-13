import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="button search-form__btn">Поиск</button>
      </div>

      <div className="search-form__filter">
        <div class="container">
          <label class="search-form__filter-switch">
            <input type="checkbox" /> <div></div>
          </label>
        </div>
        <span className="search-form__filter-name">Короткометражки</span>
      </div>
    </form>
  );
}
