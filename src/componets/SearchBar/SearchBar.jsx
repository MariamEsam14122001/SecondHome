

import React, { useState, useEffect } from 'react';
import styles from './searchBar.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SearchButton from '../SearchButton/SearchButton';

const SearchBar = ({ initialValues, onSearch, navigate }) => { // Receive navigate function as a prop
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (initialValues) {
      setQuery(initialValues.query || '');
      setSearchType(initialValues.searchType || '');
      setCity(initialValues.city || '');
      setPrice(initialValues.price || '');
    }
  }, [initialValues]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch({ query, searchType, city, price });
    navigate('/search'); // Use navigate function to navigate to search results page
  };

 
  const cities = ["Alexandria",
    "Cairo",
    "Aswan"];

 

  return (
    <form className={styles["search-form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Region"
      />
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <select value={city} name="city"  onChange={(e) => setCity(e.target.value)}>
        <option value="">All cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select value={searchType} name={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="">All Types</option>
        <option value="ind">Individual</option>
        <option value="Shared">Shared</option>
       
      </select>
      <SearchButton/>
    </form>
  );
}


export default SearchBar;
