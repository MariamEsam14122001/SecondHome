import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import people from './people.png';
import search from './search.png';
import wishlist from './wishlist.png';
import styles from './header.module.css';



const Header = (props) => {
  return (
    <header>
    <img src={logo} className={styles['logo']} />
    <ul className={styles['menu']}>
    <li><Link to="/">Home</Link></li>
    <li ><Link>Accommodation</Link></li>
    <li ><Link>contact us</Link></li>
    <li><Link to="/Getstarted" >Get started </Link></li>
    <li><Link to="/Login" >log in</Link></li>
    </ul>
    <div className={styles["profile-icons"]}>
    <img src={people} className={styles['people']}/>
    <Link to="/wishlist"><img src={wishlist} className={styles['wishlist']}/></Link>
    </div>
  </header>
  )
}

export default Header;
