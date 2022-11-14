import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
// import Footer from "../Footer/Footer";
// import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

export default function App() {


  return (
    <div className="app">
      <Helmet>
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
        {/* <Header /> */}

        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route
            path="/movies"
            element={<Movies />}
          />

          <Route path="/signup" element={<Register />} />

          <Route path="/signin" element={<Login />} />

          <Route path="*" element={<NotFound />} />

          {/* 

          <Route
            path="/saved-movies"
            element={<SavedMovies />}
          />
          
          <Route
            path="/profile"
            element={<Profile />}
          />

 */}
        </Routes>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
