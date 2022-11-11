import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__container">
          <li className="portfolio__item">
            <a href="#project" className="link portfolio__link"
            target="_blank" rel="noopener noreferrer">
            <p className="portfolio__text-link">Статичный сайт</p>
            <img alt="Стрелка-ссылка" className="portfolio__arrow-link" src={arrow} />
            </a>
          </li>
          <li className="portfolio__item">
            <a href="https://uralyanka.github.io/russian-travel/" className="link portfolio__link"             target="_blank" rel="noopener noreferrer">
            <p className="portfolio__text-link">Адаптивный сайт</p>
            <img alt="Стрелка-ссылка" className="portfolio__arrow-link" src={arrow} />
            </a>
          </li>
          <li className="portfolio__item">
            <a href="http://uralyanka.mesto.nomoredomains.icu/sign-in" className="link portfolio__link"
            target="_blank" rel="noopener noreferrer">
            <p className="portfolio__text-link">Одностраничное приложение</p>
            <img alt="Стрелка-ссылка" className="portfolio__arrow-link" src={arrow} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
