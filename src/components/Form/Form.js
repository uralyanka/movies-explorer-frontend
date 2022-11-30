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
  onSubmit,
  isSubmitDisabled,
  requestError,
}) {

  const textRequestError = requestError.textErr;
  const classNameRequestError = requestError.classNameErr;

  const requestErrorClassName = `form__request-error form__request-error_${classNameRequestError}`;
  const submitButtonClassName = `button form__submit-btn ${isSubmitDisabled && "form__submit-btn_inactive"}`;

  return (
    <form className="form" onSubmit={onSubmit}>
      <Link to="/" className="form__logo-link">
        <img alt="Лого сайта" src={logo} />
      </Link>

      <h1 className="form__title">{title}</h1>
      <div className="form__input-container">{children}</div>

      <div className="form__submit-container">
      <span className={requestErrorClassName}>{textRequestError}</span>
      <button
        type="submit"
        aria-label="Отправить данные"
        className={submitButtonClassName}
        disabled={isSubmitDisabled}
      >
        {buttonText}
      </button>
      </div>

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
