import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import logo from "../../images/logo.svg";

export default function Form({
  title,
  children,
  buttonText,
  underFormText,
  underFormLinkPath,
  underFormLinkText,
}) {
  return (
    <form className="form">
      <Link to="/" className="form__logo-link">
        <img alt="Лого сайта" src={logo} />
      </Link>

      <h2 className="form__title">{title}</h2>

      {children}

      <button
        type="submit"
        aria-label="Отправить данные"
        className="button form__submit-btn"
      >
        {buttonText}
      </button>

      <div className="form__under-form">
        <p className="form__text-under-form">
          {`${underFormText} `}
          <Link className="link form__link-under-form" to={underFormLinkPath}>
            {underFormLinkText}
          </Link>
        </p>
      </div>
    </form>
  );
}
