import PropTypes from "prop-types";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" name="search" id="search" placeholder="Search image" />
    </div>
  );
};

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
