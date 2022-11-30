import React from "react";
import "./Input.css";

export default function Input({ inputText, inputError, ...rest }) {
  return (
    <div className="input__container">
      <span className="input__text">{inputText}</span>
      <input {...rest} className="input" />
      <span className="input__error">{inputError}</span>
    </div>
  );
}
