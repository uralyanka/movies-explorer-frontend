import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__stages-flex-container">
        <div className="about-project__stages-description">
          <h3 className="about-project__stages-description-title">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__stages-description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </div>

        <div className="about-project__stages-description">
          <h3 className="about-project__stages-description-title">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__stages-description-text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__timeline-grid-container">
        <div className="about-project__timeline about-project__timeline-back-end">1 неделя</div>
          <div className="about-project__timeline about-project__timeline-front-end">4 недели</div>
          <p className="about-project__timeline-description">Back-end</p>
          <p className="about-project__timeline-description">Front-end</p>
      </div>
    </section>
  );
}
