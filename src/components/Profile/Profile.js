import "./Profile.css";
import Header from "../Header/Header";

export default function Profile({ isLoggedIn, handleLogOut }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, Геннадий!</h1>
        <div className="profile__info">
          <div className="profile__input-container">
            <span className="profile__input-text">Имя</span>
            <input
              id="profile-name"
              name="profile-name"
              placeholder=" "
              required
              minLength="2"
              maxLength="40"
              type="text"
              value="Геннадий"
              className="profile__input"
            />
          </div>
          <div className="profile__input-container">
            <span className="profile__input-text">Email</span>
            <input
              type="profile-email"
              placeholder=" "
              required
              value="gena@mail.ru"
              className="profile__input"
            />
          </div>
        </div>

        <div className="profile__buttons">
          <button
            type="submit"
            aria-label="Редактировать данные профиля"
            className="button profile__submit-btn"
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
        </div>
      </main>
    </>
  );
}
