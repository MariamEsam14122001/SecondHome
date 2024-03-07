import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import people from './people.png';
import search from './search.png';
import wishlist from './wishlist.png';
import styles from './header.module.css';



const Header = (props) => {
  return (
    <div  className={styles['header']}>
    <img src={logo} className={styles['logo']} />
    <Link to="/" className={styles['text']}>
      Home
    </Link>
    <span className={styles['text02']}>
      <span>Accommodation</span>
    </span>
    <span className={styles['text04']}>
      <span>contact us</span>
    </span>
    <div className={styles['search']}>
      <div className={styles['searhbar']}></div>
      <img
        src={search}
        className={styles['searchlogo']}
      />
      <span className={styles['text06']}>
        <span className={styles['text07']}>
          search
        </span>
      </span>
    </div>
    <Link to="/Getstarted" className={styles['text08']}>
      Get started
    </Link>
    <Link to="/Login" className={styles['text10']}>
      log in
    </Link>
    <img
      src={people}
      className={styles['people']}
    />
    <img
      src={wishlist}
      className={styles['wishlist']}
    />
  </div>
  )
}

export default Header;
