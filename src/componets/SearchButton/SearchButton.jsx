import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./SearchButton.module.css";

const SearchButton = () => {
  return (
    <button className={styles["search-button"]} type="submit">Search</button>
  );
};

export default SearchButton;
