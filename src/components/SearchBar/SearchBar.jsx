import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.searchForm}>
        <input
          className={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
