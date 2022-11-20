import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import * as auth from "../../utils/auth";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [requestRegisterError, setRequestRegisterError] = useState({});
  const [requestLoginError, setRequestLoginError] = useState({});
  const [requestUpdateResponse, setRequestUpdateResponse] = useState({});

  const navigate = useNavigate();

  //Все фильмы с api
  useEffect(() => {
    moviesApi
      .getAllMovies()
      .then((res) => {
        setMovies(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Сохраненные фильмы с api
  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        console.log(res);
        setSavedMovies((res) =>
          res.filter((m) => {
            return m._id === currentUser._id;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  // useEffect(() => {
  //   console.log(savedMovies);
  //   setSavedMovies([]);
  // }, []);

  // Загрузка данных пользователя
  useEffect(() => {
    mainApi
      .getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Сохранение фильма
  function handleMovieSave(movie) {
    mainApi
      .saveMovie(movie)
      .then((newSavedMovie) => {
        // console.log(newSavedMovie);
        setSavedMovies((movies) => [newSavedMovie, ...movies]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Обновление профиля
  function handleUpdateUser(name, email) {
    mainApi
      .setUserData(name, email)
      .then((userData) => {
        setCurrentUser(userData);
        setRequestUpdateResponse("Профиль успешно обновлен!");
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          setRequestUpdateResponse("Профиль с таким email уже существует.");
        } else {
          setRequestUpdateResponse(
            "При обновлении профиля произошла ошибка, обновите страницу."
          );
        }
        console.log(err);
      });
  }

  // Регистрация
  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          setRequestRegisterError({
            classNameErr: "error-active",
            textErr: "Пользователь с таким email уже существует.",
          });
        } else {
          setRequestRegisterError({
            classNameErr: "error-active",
            textErr: "При регистрации пользователя произошла ошибка.",
          });
        }
        console.log(err);
      });
  }

  // Авторизация
  function handleLogin(email, password) {
    auth
      .signin(email, password)
      .then(() => {
        mainApi
          .getUserData()
          .then((userData) => {
            setCurrentUser(userData);
          })
          .catch((err) => {
            console.log(err);
          });
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        if (err === "Ошибка: 401") {
          setRequestLoginError({
            classNameErr: "error-active",
            textErr: "Вы вели неправильный логин или пароль.",
          });
        } else {
          setRequestLoginError({
            classNameErr: "error-active",
            textErr: "Неизвестная ошибка. Попробуйте еще!",
          });
        }
        console.log(err);
      });
  }

  // Аутентификация при повторном входе
  function handleCheckToken() {
    auth
      .getCurrentUser()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        if (err === "Ошибка: 400")
          return console.log(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
          );
        if (err === "Ошибка: 401")
          return console.log(
            "При авторизации произошла ошибка. Переданный токен некорректен."
          );
        console.log(err);
      });
  }

  useEffect(() => {
    handleCheckToken();
  }, []);

  function handleLogOut() {
    auth
      .signout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="app">
      <Helmet htmlAttributes={{ lang: "ru" }}>
        <meta charSet="utf-8" />
        <title>YA.Diploma</title>
        <link
          rel="canonical"
          href="http://uralyanka.diploma.nomoredomains.icu"
        />
        <meta
          name="description"
          content="Дипломная работа Яны Евстегнеевой на Яндекс.Практикуме"
        />
      </Helmet>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route exact path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              path="/signup"
              element={
                <Register
                  handleRegister={handleRegister}
                  requestRegisterError={requestRegisterError}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  handleLogin={handleLogin}
                  requestLoginError={requestLoginError}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  isLoggedIn={isLoggedIn}
                  handleLogOut={handleLogOut}
                  currentUser={currentUser}
                  handleUpdateUser={handleUpdateUser}
                  requestUpdateResponse={requestUpdateResponse}
                  component={Profile}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  isLoggedIn={isLoggedIn}
                  component={Movies}
                  movies={movies}
                  handleMovieSave={handleMovieSave}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  isLoggedIn={isLoggedIn}
                  movies={savedMovies}
                  // component={SavedMovies}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}
