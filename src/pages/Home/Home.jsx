import React, { useState } from 'react';
import Header from "../../componets/header/Header";
import Head from "../../componets/head/Head";
import Footer from "../../componets/footer/Footer";
import AccommodationList from "../../componets/AccommodationList/AccommodationList";
//import RecommendedList from "../../componets/RecommendedList/RecommendedList";
import styles from "./home.module.css";
import Title from "../../componets/title/Title";
import accommodationsData from './accommodations.json';
import SearchForm from "../../componets/SearchForm/SearchForm";
import PropTypes from 'prop-types';

const Home =() =>{

  
  
    return(
        <div className={styles['container']}>
        <div className={styles['home']}>
        <Header/>
        <Head/>
        <div className={styles['archieve']}>
        <SearchForm />
      </div>
        <Title/>
        
        <AccommodationList accommodations={accommodationsData}/>
         
        <Footer/>
          
        </div>
      </div>
    )
}
SearchForm.defaultProps = {
  city: "All cities",
   
 };
 
 SearchForm.propTypes = {
   city: PropTypes.string,
  
 };

export default Home;