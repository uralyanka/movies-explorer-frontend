import { useState } from "react";
import Form from "../Form/Form";
import "./Register.css";
import Input from "../Input/Input";

export default function Register({ handleRegister }) {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function signup(e) {
    e.preventDefault();

    handleRegister({ username, email, password });

    setUserName("");
    setEmail("");
    setPassword("");
  }

  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        underFormText="Уже зарегистрированы?"
        underFormLinkPath="/signin"
        underFormLinkText="Войти"
        onSubmit={signup}
      >
        <Input
          inputText="Имя"
          name="Имя"
          type="text"
          required
          value={username}
          onChange={handleUserNameChange}
        />

        <Input
          inputText="Email"
          name="Email"
          type="email"
          required
          // autoComplete="off"
          value={email}
          onChange={handleEmailChange}
        />

        <Input
          inputText="Пароль"
          type="password"
          minLength="2"
          maxLength="40"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </Form>
    </main>
  );
}
