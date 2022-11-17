import { useEffect } from "react";
import Form from "../Form/Form";
import "./Login.css";
import Input from "../Input/Input";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Login({ handleLogin, requestLoginError }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const isDisabled = !isValid;

  function signin(e) {
    e.preventDefault();
    // console.log(values.email, values.password);
    handleLogin(values.email, values.password);
  }

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        underFormText="Еще не зарегистрированы?"
        underFormLinkPath="/signup"
        underFormLinkText="Регистрация"
        onSubmit={signin}
        isSubmitDisabled={isDisabled}
        requestError={requestLoginError}
      >
        <Input
          inputText="Email"
          name="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          // autoComplete="off"
          value={values.email}
          onChange={handleChange}
          inputError={errors.email}
        />

        <Input
          inputText="Пароль"
          name="password"
          type="password"
          minLength="2"
          maxLength="30"
          required
          value={values.password}
          onChange={handleChange}
          inputError={errors.password}
        />
      </Form>
    </main>
  );
}
