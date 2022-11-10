import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__project-name">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__project-links">
        <p className="footer__text">&#169;&nbsp;{year}</p>
        <div className="footer__links">
        <a className="link footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="link footer__link"
            href="https://github.com/uralyanka"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
