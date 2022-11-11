import Form from "../Form/Form";

export default function Register() {
  return (
    <main className="content content_type_auth">
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        underFormText="Уже зарегистрированы?"
        underFormLinkPath="/signin"
        underFormLinkText="Войти"
      >
        <input
          type="text"
          placeholder="Имя"
          required
          className="form__input"
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="form__input"
        />

        <input
          type="password"
          placeholder="Пароль"
          minLength="2"
          maxLength="40"
          required
          className="form__input"
        />
      </Form>
    </main>
  );
}
