

import React, { useState } from 'react';
import styles from './searchForm.module.css'; 
import { Link } from 'react-router-dom';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');

  // Sample list of cities
  const cities = ["Alexandria",
    "Cairo",
    "Aswan"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, price, city, type });
  };

  return (
    <form className={styles["search-form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Region"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">All cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="ind">Individual</option>
        <option value="Shared">Shared</option>
      </select>
     <Link to="/SearchResult"><button type="submit">Search</button></Link> 
    </form>
  );
}

// SearchForm.defaultProps = {
//   defaultCity: "All cities",
//   defaultType: "All Types"
// };

// SearchForm.propTypes = {
//   defaultCity: PropTypes.string,
//   defaultType: PropTypes.string,
// };

export default SearchForm;
