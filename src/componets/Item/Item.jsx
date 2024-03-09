import React from "react";
import styles from "./item.module.css";
import location from "./location.png";

const Item = ({ accommodation }) =>{
    return(
      <div className={styles["card"]}>
      <div className="col card ">
        <div className={styles['item']}>
        <div className={styles['content']}>
          <div className={styles['frame53']}>
            <span className={styles['text']}>
            {accommodation.title}
            </span>
            <span className={styles['text2']}>
            {accommodation.price}
            </span>
          </div>
          <div className={styles['frame52']}>
            <img
              src={location}
              className={styles['locationonblack24dp2']}
            />
            <span className={styles['text4']}>
            {accommodation.location}
            </span>
          </div>
        </div>
        <img
          src={accommodation.image} alt={accommodation.title}
          className={styles['image']}
        />
      </div>
      </div>
      </div>
      
    )
}

export default Item;