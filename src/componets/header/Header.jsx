import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import people from './people.png';
import search from './search.png';
import wishlist from './wishlist.png';
import styles from './header.module.css';



const Header = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className={styles['container']} >
      <div className={styles['header']}>
        <div className={styles['searhbar']}></div>
        <img
          src={logo}
          alt="logo826"
          className={styles['logo']}
        />
        <Link to="/" className={styles['text']}>Home</Link>
        <span className={styles['text02']}>
          <span>Accommodation</span>
        </span>
        <span className={styles['text04']}>
          <span>contact us</span>
        </span>
        <span className={styles['text06']}>
          <span className={styles['text07']}>
            search
          </span>
        </span>
        <img
          src={search}
          alt="searchlogo824"
          className={styles['searchlogo']}
        />
         
          <Link to="/Getstarted" className={styles['text08']}>Get started</Link>
          <Link to="/Login" className={styles['text10']}>log in</Link>
        
        <img
          src={people}
          alt="people816"
          className={styles['people']}
        />
        <img
          src={wishlist}
          alt="wishlist827"
          className={styles['wishlist']}
        />
      </div>
      
    </div>
    </nav>
  )
}

export default Header;
