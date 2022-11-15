import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
// import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

export default function App() {
  const isLoggedIn = true;
  // true - интерфейс авторизованного пользователя
  // false - интерфейс неавторизованного пользователя

  return (
    <div className="app">
      <Helmet htmlAttributes={{ lang: 'ru' }}>
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
        <Routes>
          <Route exact path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
          <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
          <Route
            path="/saved-movies"
            element={<SavedMovies isLoggedIn={isLoggedIn} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
