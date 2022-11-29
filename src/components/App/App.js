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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProtectedRouteAuth from "../ProtectedRouteAuth/ProtectedRouteAuth";
import "./App.css";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });

  const [requestRegisterError, setRequestRegisterError] = useState({});
  const [requestLoginError, setRequestLoginError] = useState({});
  const [requestUpdateResponse, setRequestUpdateResponse] = useState({});

  const navigate = useNavigate();

  const [savedMovies, setSavedMovies] = useState([]);

  // //Все фильмы с api
  // // useEffect(() => {
  // //   moviesApi
  // //     .getAllMovies()
  // //     .then((res) => {
  // //       setMovies(res);
  // //       // console.log(res);
  // //     })
  // //     .catch((err) => {
  // //       console.log(err);
  // //     });
  // // }, []);

  //Сохраненные фильмы с api
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  // console.log(savedMovies);

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
            setLoggedIn(true);
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
  useEffect(() => {
    auth
      .getCurrentUser()
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch((err) => {
        handleLogOut();
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
  }, []);

  // Выход из аккаунта
  function handleLogOut() {
    auth
      .signout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({ name: "", email: "" });
        localStorage.clear();
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
          href="https://uralyanka.diploma.nomoredomains.icu"
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
                <ProtectedRouteAuth
                  component={Register}
                  isLoggedIn={isLoggedIn}
                  handleRegister={handleRegister}
                  requestRegisterError={requestRegisterError}
                ></ProtectedRouteAuth>
              }
            />
            <Route
              path="/signin"
              element={
                <ProtectedRouteAuth
                  component={Login}
                  isLoggedIn={isLoggedIn}
                  handleLogin={handleLogin}
                  requestLoginError={requestLoginError}
                ></ProtectedRouteAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  component={Profile}
                  isLoggedIn={isLoggedIn}
                  handleLogOut={handleLogOut}
                  currentUser={currentUser}
                  handleUpdateUser={handleUpdateUser}
                  requestUpdateResponse={requestUpdateResponse}
                ></ProtectedRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  component={Movies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                ></ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
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
