import React, { useState, useEffect } from 'react';
import Items from '../../componets/Items/Items';
import SearchForm from '../../componets/SearchForm/SearchForm';
import styles from "./SearchResults.module.css";
import AccommodationsList from '../../componets/AccommodationList/AccommodationList';
import data from'./accommodations.json';

function SearchResult({ searchQuery }) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data based on search query and filters
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/accommodations?${getQueryString(searchQuery)}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.results);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup code
    };
  }, [searchQuery]);

  // Helper function to convert search query object to URL query string
  const getQueryString = (queryObj) => {
    return Object.keys(queryObj)
      .filter((key) => queryObj[key])
      .map((key) => `${key}=${encodeURIComponent(queryObj[key])}`)
      .join('&');
  };

  return (
    <div>
        <div className={styles["header"]} >
          <SearchForm/>
        </div>
     <AccommodationsList accommodations={data}/>
      
    </div>
  );
}

//<Items accommodations={searchResults} />

export default SearchResult;
