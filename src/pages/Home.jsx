import React from "react";
import Header from "../componets/header/Header";
import Head from "../componets/head/Head";
import Footer from "../componets/footer/Footer";
import Item from "../componets/items/Item";
import styles from "./home.module.css";

const Home =() =>{
    return(
        <div className={styles['container']}>
        <div className={styles['home']}>
        <Header/>
        <Head/>
        <span className={styles['text']}><span>
            Recommended Properties in Egypt</span>
            </span>
        <div className={styles['content-wrapper']}>
        <Item />
        </div>
        <Footer/>
          
        </div>
      </div>
    )
}

export default Home;