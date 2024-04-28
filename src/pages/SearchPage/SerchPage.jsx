// SearchPageResults.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../componets/SearchBar/SearchBar';
import styles from './SearchPage.module.css';
import Items from '../../componets/Items/Items';

const SearchPageResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  //const location = useLocation();
  //const { searchParams } = location.state || {};

  const handleSearch = async (params) => {
    try {
      const response = await axios.get('/api/search', { params });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <div className={styles["header"]}>
      <SearchBar onSearch={handleSearch} />
      </div>
      
      {/*<Items accommodations={searchResults} />*/}
    </div>
  );
};

export default SearchPageResults;
