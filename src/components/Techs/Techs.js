import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__content">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__decription">
          <p className="techs__decription-title">7 технологий</p>
          <p className="techs__decription-text">
            На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
            применили в&nbsp;дипломном проекте.
          </p>
        </div>

        <ul className="techs__grid-container">
          <li className="techs__grid-item">HTML</li>
          <li className="techs__grid-item">CSS</li>
          <li className="techs__grid-item">JS</li>
          <li className="techs__grid-item">React</li>
          <li className="techs__grid-item">Git</li>
          <li className="techs__grid-item">Express.js</li>
          <li className="techs__grid-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
