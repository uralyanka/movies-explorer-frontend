import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <span className="not-found__text">Страница не найдена</span>
      <Link to="/" className="link not-found_link">
        На главную
      </Link>
    </main>
  );
}
