import { useState } from "react";
import Form from "../Form/Form";
import "./Login.css";
import Input from "../Input/Input";

export default function Login({ handleLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSignin(e) {
    e.preventDefault();

    handleLogin({ email, password });

    setEmail('');
    setPassword('');
  }

  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        underFormText="Еще не зарегистрированы?"
        underFormLinkPath="/signup"
        underFormLinkText="Регистрация"
        onSubmit={handleSignin}
      >
        <Input
          inputText="Email"
          name="Email"
          type="email"
          required
          // autoComplete="off"
          onChange={handleEmailChange}
        />

        <Input
          inputText="Пароль"
          type="password"
          minLength="2"
          maxLength="40"
          required
          onChange={handlePasswordChange}
        />
      </Form>
    </main>
  );
}
