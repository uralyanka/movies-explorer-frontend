import React from "react";
import Form from "../Form/Form";
import "./Register.css";
import Input from "../Input/Input";

export default function Register() {
  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        underFormText="Уже зарегистрированы?"
        underFormLinkPath="/signin"
        underFormLinkText="Войти"
      >
        <Input
          inputText="Имя"
          name="Имя"
          type="text"
          required
        />

        <Input
          inputText="Email"
          name="Email"
          type="email"
          required
          autoComplete="off"
        />

        <Input
          inputText="Пароль"
          type="password"
          minLength="2"
          maxLength="40"
          required
        />
      </Form>
    </main>
  );
}
