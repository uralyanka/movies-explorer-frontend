import React from 'react';
import './NavTab.css';

export default function NavTab() {
    return (
      <section className="navtab">
        <ul className="navtab__grid-container">
            <li className="navtab__grid-item"><a href="#project" className="link">О проекте</a></li>
            <li className="navtab__grid-item"><a href="#techs" className="link">Технологии</a></li>
            <li className="navtab__grid-item"><a href="#aboutme" className="link">Студент</a></li>
        </ul>
      </section>
      );
}