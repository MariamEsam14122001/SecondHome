// WishList.js

import React, { useState, useEffect } from 'react';
import Items from '../../componets/Items/Items';
import Header from '../../componets/header/Header';
import styles from './wishlist.module.css';
import AccommodationList from '../../componets/AccommodationList/AccommodationList'
import accommodationsData from './accommodations.json'
import axios from 'axios'; 
function WishList() {

  // const [wishlist, setWishlist] = useState([]);

  // useEffect(() => {
  //   // Fetch wishlist items from backend when component mounts
  //   axios.get('/api/wishlist')
  //     .then(response => {
  //       setWishlist(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching wishlist:', error);
  //     });
  // }, []);

  return (
    <div>
      <nav className={styles['header']}>
        <Header/></nav>
   { /*  <Items accommodations={wishlist}/> */}
   <div className={styles['list']}>
   <AccommodationList accommodations={accommodationsData} />
   </div>
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
