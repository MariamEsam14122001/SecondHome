import React from "react";
import styles from "./item.module.css";
import loc from "./location.png";
import wishlist from "./wishlist.png";
import axios from "axios";

function Item( { title , price , location,image }) {

  const handleAddToWishlist = async () => {
    try {
      await axios.post('/api/wishlist', { title, price, location, image });
      // Handle success
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      // Handle error
    }
  };

    return(
      <div className={styles["card"]}>
      <div className="col card ">
        <div className={styles['item']}>
        <div onClick={handleAddToWishlist} style={{ cursor: 'pointer' }}>
        <img src={wishlist} className={styles['wishlist']}/> 
        </div>
        <div className={styles['content']}>
          <div className={styles['frame53']}>
          
            <span className={styles['text']}>
            {title}
            </span>
            <span className={styles['text2']}>
            {price}
            </span>
          </div>
          <p>Discription</p>
          <div className={styles['frame52']}>
            <img
              src={loc}
              className={styles['locationonblack24dp2']}
            />
            <span className={styles['text4']}>
            {location}
            </span>
          </div>
          <span className={styles['text']}>Shared</span>
          <span className={styles['text']}>0111111111</span>
          
        </div>
        <img
          src={image} alt={title}
          className={styles['image']}
        />
        
         
      </div>
      </div>
      </div>
      
    )
}

export default Item;