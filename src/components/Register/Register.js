import { useEffect } from "react";
import Form from "../Form/Form";
import "./Register.css";
import Input from "../Input/Input";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Register({ handleRegister, requestRegisterError }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const isDisabled = !isValid;

  function signup(e) {
    e.preventDefault();
    console.log(values.name, values.email, values.password);
    handleRegister(values.name, values.email, values.password);
  }

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        underFormText="Уже зарегистрированы?"
        underFormLinkPath="/signin"
        underFormLinkText="Войти"
        onSubmit={signup}
        isSubmitDisabled={isDisabled}
        requestRegisterError={requestRegisterError}
      >
        <Input
          inputText="Имя"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          required
          value={values.name}
          onChange={handleChange}
          inputError={errors.name}
        />

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
          maxLength="40"
          required
          value={values.password}
          onChange={handleChange}
          inputError={errors.password}
        />
      </Form>
    </main>
  );
}
