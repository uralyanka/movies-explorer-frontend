import { useEffect } from "react";
import "./SearchForm.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function SearchForm({ handleSearchSubmit, searchErrorText, setSearchErrorText, searchDataText }) {
  const { values, handleChange } = useFormWithValidation();

  // Если делать кнопку disabled
  // const isSubmitDisabled = isValid;

  // const submitButtonClassName = `button search-form__btn ${
  //   !isSubmitDisabled && "search-form__btn_inactive"
  // }`;

  function handleSubmit(e) {
    e.preventDefault();
    if (values.keyWord === " ") {
      setSearchErrorText("Нужно ввести ключевое слово")
      return;
    }
    handleSearchSubmit(values.keyWord);
  }

  useEffect(() => {
    if (searchDataText) {
      values.keyWord = searchDataText;
    }
  }, [searchDataText]);

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
          type="submit"
          className="button search-form__btn"
          // className={submitButtonClassName}
          // disabled={!isSubmitDisabled}
        >
          Поиск
        </button>
      </div>
      <p className="search-form__input_error">{searchErrorText}</p>
    </form>
  );
}
