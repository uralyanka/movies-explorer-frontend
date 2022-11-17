import { useState } from "react";
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
// import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

export default function App() {
  // const isLoggedIn = true;
  // true - интерфейс авторизованного пользователя
  // false - интерфейс неавторизованного пользователя

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    _id: "",
  });

  const navigate = useNavigate();

  // Регистрация
  function handleRegister(name, email, password) {
    console.log('Я внутри функции handleRegister');
    console.log(name, email, password);
    auth
      .register(name, email, password)
      .then((res) => {
        console.log('Я после запроса к auth в handleRegister');
        console.log(res.name, res.email);
        setUserData({ name: res.name, email: res.email });
        navigate("/movies");
        setLoggedIn(true);
      })
      .catch((err) => {
        if (err === "Ошибка: 400")
          return console.log("некорректно заполнено одно из полей");
        console.log(err);
      });
  }

  // Авторизация
  function handleLogin(email, password) {
    console.log('Я внутри функции handleLogin');
    console.log(email, password);
    auth
      .signin(email, password)
      .then((res) => {
        console.log('Я после запроса к auth в handleLogin');
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        if (err === "Ошибка: 400")
          return console.log("не передано одно из полей");
        if (err === "Ошибка: 401")
          return console.log("пользователь с email не найден");
        console.log(err);
      });
  }

  // // Аутентификация при повторном входе
  // function handleCheckToken() {
  //   auth
  //     .getContent()
  //     .then((res) => {
  //       setLoggedIn(true);
  //       navigate("/movies");
  //     })
  //     .catch((err) => {
  //       if (err === "Ошибка: 400")
  //         return console.log("Токен не передан или передан не в том формате");
  //       if (err === "Ошибка: 401")
  //         return console.log("Переданный токен некорректен");
  //       console.log(err);
  //     });
  // }

  // useEffect(() => {
  //   handleCheckToken();
  // }, []);

  function handleLogOut() {
    auth
      .signout()
      .then((res) => {
        setLoggedIn(false);
        navigate("/signin");
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
      <CurrentUserContext.Provider value={'currentUser'}>
        <Routes>
          <Route exact path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/profile"
            element={<Profile isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} userData={userData} />}
          />
          <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
          <Route
            path="/saved-movies"
            element={<SavedMovies isLoggedIn={isLoggedIn} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}
