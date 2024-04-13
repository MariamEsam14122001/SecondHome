import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../componets/SearchBar/SearchBar';
import SearchResults from '../../componets/SearchResults/SearchResults';
import {  useLocation } from 'react-router-dom'; 
import styles from './SearchPage.module.css';

const SearchPage = ({ navigate }) => {
  const location = useLocation();
  const { searchParams } = location.state || {};
  const [results, setResults] = useState([]);

  const handleSearch = async (params) => {
    try {
      const response = await axios.get('/api/search', { params });
      setResults(response.data);
      navigate('/search');
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
        <div className={styles["header"]} >
        <SearchBar initialValues={searchParams} onSearch={handleSearch} />
        </div>
        <SearchResults results={results} />
      
    </div>
  );
}

//<Items accommodations={searchResults} />

export default SearchPage;
