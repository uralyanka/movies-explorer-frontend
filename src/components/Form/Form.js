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
  underFormLinkText
}) {
  return (
    <div className="form">
      <Link to="/" className="form__logo-link">
        <img alt="Лого сайта" className="header__logo" src={logo} />
      </Link>

      <h2 className="form__title">{title}</h2>

      <form className={`auth-form__form`}>
        <fieldset className="auth-form__input-container">{children}</fieldset>

        <button
          type="submit"
          aria-label="Отправить данные"
          className="button auth-form__submit-btn"
        >
          {buttonText}
        </button>
      </form>
      <div className="form__under-form">
        <p className="form__text-under-form">
          {`${underFormText} `}
          <Link className="form__link-under-form" to={underFormLinkPath}>
            {underFormLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
