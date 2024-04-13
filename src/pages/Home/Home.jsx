import React, { useState } from 'react';
import Header from "../../componets/header/Header";
import Head from "../../componets/head/Head";
import Footer from "../../componets/footer/Footer";
import AccommodationList from "../../componets/AccommodationList/AccommodationList";
//import RecommendedList from "../../componets/RecommendedList/RecommendedList";
import styles from "./home.module.css";
import Title from "../../componets/title/Title";
import accommodationsData from './accommodations.json';
import SearchBar from '../../componets/SearchBar/SearchBar';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home =() =>{

  const [searchParams, setSearchParams] = useState({});
  const navigate = useNavigate(); 

  const handleSearch = async (params) => {
    try {
      const response = await axios.get('/api/search', { params });
      console.log(response.data); // Handle response data (e.g., update state)
      navigate('/search');
    } catch (error) {
      console.error('Error searching:', error);
    }
    setSearchParams(params);
  };

    return(
        <div className={styles['container']}>
        <div className={styles['home']}>
        <Header/>
        <Head/>
        <div className={styles['archieve']}>
        <SearchBar initialValues={searchParams} onSearch={handleSearch} navigate={navigate} />
        
      </div>
        <Title/>
        
        <AccommodationList accommodations={accommodationsData}/>
         
        <Footer/>
          
        </div>
      </div>
    )
}


export default Home;