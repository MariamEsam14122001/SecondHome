import React from "react";
import Header from "../../componets/header/Header";
import Head from "../../componets/head/Head";
import Footer from "../../componets/footer/Footer";
import Items from "../../componets/Items/Items";
import styles from "./home.module.css";
import Title from "../../componets/title/Title";
import accommodationsData from './accommodations.json';

const Home =() =>{
    return(
        <div className={styles['container']}>
        <div className={styles['home']}>
        <Header/>
        <Head/>
        <Title/>
        
        <Items accommodations={accommodationsData}/>
        
        <Footer/>
          
        </div>
      </div>
    )
}

export default Home;