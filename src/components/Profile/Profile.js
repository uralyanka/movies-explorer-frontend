import { useState, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Profile({
  isLoggedIn,
  handleLogOut,
  currentUser,
  handleUpdateUser,
  requestUpdateResponse,
}) {
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();

  const [isEdit, setIsEdit] = useState(false);
  const [textResponse, setTextResponse] = useState("");

  const isSubmitDisabled =
    isValid &&
    (values.name !== currentUser.name || values.email !== currentUser.email);

  const submitButtonClassName = `button profile__submit-btn ${
    !isSubmitDisabled && "profile__submit-btn_inactive"
  }`;

  function handleEditProfile() {
    resetForm(currentUser, {}, false);
    setIsEdit(true);
    setTextResponse("");
  }

  function submitEditProfile(e) {
    e.preventDefault();
    setIsEdit(false);
    handleUpdateUser(values.name, values.email);
  }

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  useEffect(() => {
    setTextResponse(requestUpdateResponse);
  }, [requestUpdateResponse]);

  useEffect(() => {
    setTextResponse("");
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <form className="profile__form" onSubmit={submitEditProfile}>
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <div className="profile__info">
            <label className="profile__input-container">
              <span className="profile__input-text">Имя</span>
              <input
                value={values.name || currentUser.name}
                onChange={handleChange}
                id="name-input"
                type="text"
                pattern="[a-zA-Z\u0400-\u04ff- ]{2,30}"
                name="name"
                placeholder=""
                className="profile__input"
                required
                disabled={!isEdit}
              />
            </label>
            <label className="profile__input-container">
              <span className="profile__input-text">Email</span>
              <input
                value={values.email || currentUser.email}
                onChange={handleChange}
                id="email-input"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                name="email"
                placeholder=""
                className="profile__input"
                required
                disabled={!isEdit}
              />
            </label>
          </div>

          <div className="profile__buttons">
            <span className="profile__response-text">{textResponse}</span>
            {isEdit ? (
              <button
                type="submit"
                aria-label="Сохранить данные профиля"
                className={submitButtonClassName}
                disabled={!isSubmitDisabled}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  type="button"
                  aria-label="Редактировать данные профиля"
                  className="button profile__edit-btn"
                  onClick={handleEditProfile}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  aria-label="Выйти из профиля"
                  className="button profile__signout-btn"
                  onClick={handleLogOut}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </main>
    </>
  );
}
