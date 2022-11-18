import { useState, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Profile({
  isLoggedIn,
  handleLogOut,
  currentUser,
  handleUpdateUser,
}) {
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();
  // console.log(values);
  
  const isSubmitDisabled =
    isValid &&
    (values.name !== currentUser.name || values.email !== currentUser.email);

  const [isEdit, setIsEditing] = useState(false);
  const [textRequest, setTextRequest] = useState("");

  const submitButtonClassName = `button profile__submit-btn ${
    !isSubmitDisabled && "profile__submit-btn_inactive"
  }`;

  function handleEditProfile() {
    // console.log("Я внутри функции handleEditProfile");
    resetForm(currentUser, {}, false);
    // console.log("Я после resetForm");
    setIsEditing(true);
    setTextRequest("лалала");
    console.log("Я в конце функции handleEditProfile");
    console.log(values.name);
  }

  function submitEditProfile(e) {
    console.log("Я внутри функции submitEditProfile");
    e.preventDefault();
    setIsEditing(false);
    handleUpdateUser(values.name, values.email);
    setTextRequest("олололо");
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, false);
    }
  }, [currentUser, resetForm]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <form className="profile__form" onSubmit={submitEditProfile}>
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <div className="profile__info">
            <div className="profile__input-container">
              <span className="profile__input-text">Имя</span>
              <input
                name="profile-name"
                type="text"
                pattern="[a-zA-Z\u0400-\u04ff- ]{2,30}"
                placeholder={currentUser.name}
                required
                className="profile__input"
                value={values.name || currentUser.name}
                onChange={handleChange}
                disabled={!isEdit}
              />
            </div>
            <div className="profile__input-container">
              <span className="profile__input-text">Email</span>
              <input
                name="profile-email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder=" "
                required
                className="profile__input"
                value={values.email || currentUser.email}
                onChange={handleChange}
                disabled={!isEdit}
              />
            </div>
          </div>

          <div className="profile__buttons">
            <span className="profile__request-text">{textRequest}</span>
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
