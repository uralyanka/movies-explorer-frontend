import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <span className="not-found__text">Страница не найдена</span>
      <Link to="/" className="link not-found_link">
        Назад
      </Link>
    </section>
  );
}
