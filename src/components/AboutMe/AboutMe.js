import React from "react";
import "./AboutMe.css";
import myphoto from "../../images/myphoto.png";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__flex-container">
        <div className="about-me__bio">
          <p className="about-me__bio-name">Яна</p>
          <p className="about-me__bio-job">
            Интернет-маркетолог в отделе разработки ПО, 28 лет
          </p>
          <p className="about-me__bio-description">
            Родилась и&nbsp;выросла в&nbsp;Екатеринбурге, закончила факультет
            теоретических основ радиотехники УрФУ
            по&nbsp;специальности&nbsp;&mdash; Информационная безопасность.
            До&nbsp;университета проходила курсы Оператор ЭВМ.
            На&nbsp;2&nbsp;курсе университета увлеклась версткой веб-страниц.
            Моей первой официальной работой было администрирование сайта
            в&nbsp;ИЭ&nbsp;УрО РАН. До&nbsp;2020 года занималась маркетингом
            в&nbsp;разнопрофильных компаниях. Сейчас работаю
            интернет-маркетологом в&nbsp;отделе разработки&nbsp;ПО
            интернет-портала Пульс цен. В&nbsp;IT-иерхахии я&nbsp;занимаю
            должность Product manager&rsquo;а. Когда вырасту, хочу стать Project
            manager&rsquo;ом. Изучаю веб-разработку, чтобы писать задачи
            техническим языком и&nbsp;лучше понимать разработчиков.
          </p>
          <a
            className="link about-me__github-link"
            href="https://github.com/uralyanka"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={myphoto} alt="Yana" />
      </div>
    </section>
  );
}
