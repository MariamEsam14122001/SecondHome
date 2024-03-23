// WishList.js

import React from 'react';
import Items from '../../componets/Items/Items';
import Header from '../../componets/header/Header';
import styles from './wishlist.module.css';

function WishList() {
  return (
    <div>
      <nav className={styles['header']}>
        <Header/></nav>
     <h2>Wish List</h2> 
      
    </div>
  );
}
// function WishList({ wishlist }) {
//   return (
//     <div>
//       <Header/>
//       <h2>Wish List</h2>
//       <Items accommodations={wishlist} />
//     </div>
//   );
// }
export default WishList;
