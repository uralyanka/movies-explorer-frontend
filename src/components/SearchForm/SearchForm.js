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
        <button className="button search-form__btn" type="submit">
          Поиск
        </button>
      </div>
    </form>
  );
}
