import Form from "../Form/Form";
import "./Login.css";
import Input from "../Input/Input";

export default function Login() {
  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        underFormText="Еще не зарегистрированы?"
        underFormLinkPath="/signup"
        underFormLinkText="Регистрация"
      >
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
