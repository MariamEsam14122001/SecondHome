import React from "react";
import styles from "./item.module.css";
import item from "./item.png";
import location from "./location.png";

const Item = () =>{
    return(
        <div className={styles['item']}>
        <div className={styles['content']}>
          <div className={styles['frame53']}>
            <span className={styles['text']}>
              <span>The Stables</span>
            </span>
            <span className={styles['text2']}>
              <span>3000 EGP</span>
            </span>
          </div>
          <div className={styles['frame52']}>
            <img
              src={location}
              className={styles['locationonblack24dp2']}
            />
            <span className={styles['text4']}>
              <span>Terry Lane, Golden CO 80403</span>
            </span>
          </div>
        </div>
        <img
          src={item}
          className={styles['image']}
        />
      </div>
    )
}

export default Item;