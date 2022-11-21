import React from "react";
import "./SearchFormFilter.css";

export default function SearchFormFilter() {
  return (
      <div className="search-form__filter">
        <div class="search-form__filter-container">
          <label class="search-form__filter-switch">
            <input type="checkbox" /> <div></div>
          </label>
        </div>
        <span className="search-form__filter-name">Короткометражки</span>
      </div>
  );
}