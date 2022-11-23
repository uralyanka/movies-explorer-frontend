import { useEffect } from "react";
import "./SearchForm.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function SearchForm({ handleSearchSubmit }) {
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();

  const isSubmitDisabled = isValid;

  const submitButtonClassName = `button search-form__btn ${
    !isSubmitDisabled && "search-form__btn_inactive"
  }`;

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchSubmit(values.keyWord);
  }

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-container">
        <input
          value={values.keyWord || ""}
          onChange={handleChange}
          id="keyWord"
          type="text"
          name="keyWord"
          minLength="1"
          maxLength="30"
          placeholder="Фильм"
          className="search-form__input"
          required
        />
        <button
          // className="button search-form__btn"
          type="submit"
          className={submitButtonClassName}
          disabled={!isSubmitDisabled}
        >
          Поиск
        </button>
      </div>
      {/* <p className="search-form__input_error">Заполните поле для поиска</p> */}
    </form>
  );
}
