import React from "react";
import "./Header.css";
// import { Route, Routes } from "react-router-dom";
// import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import HeaderLogOff from "../HeaderLogOff/HeaderLogOff";

export default function Header() {
  return (
    <header className="header">
      <HeaderLogOff />

      {/* Заготовка для JS */}
      {/* <Routes>
        <Route exact path="/" element={<HeaderLogIn />} />
        <Route
          exact
          path="/(movies|saved-movies|profile)"
          element={<HeaderLogIn />}
        />
      </Routes> */}
    </header>
  );
}
