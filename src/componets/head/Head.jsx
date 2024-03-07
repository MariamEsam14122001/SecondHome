import React from "react";
import styles from "./head.module.css";
import image from "./image.png";

const Head = (props) => {
    return(
        <div className={styles['head'] }>
      <img
        src={image}
        className={styles['image']}
      />
      <div className={styles['archieve']}>
        <div className={styles['frame8']}>
          <span className={styles['text']}>
            <span>60%</span>
          </span>
          <span className={styles['text02']}>
            <span>years growth</span>
          </span>
        </div>
        <div className={styles['frame5']}>
          <span className={styles['text04']}>
            <span>300+</span>
          </span>
          <span className={styles['text06']}>
            <span>Happy Clients</span>
          </span>
        </div>
        <div className={styles['frame6']}>
          <span className={styles['text08']}>
            <span>1k+</span>
          </span>
          <span className={styles['text10']}>
            <span>Property Ready</span>
          </span>
        </div>
        <div className={styles['frame7']}>
          <span className={styles['text12']}>
            <span>80+</span>
          </span>
          <span className={styles['text14']}>
            <span>completed Agents</span>
          </span>
        </div>
      </div>
      <span className={styles['text16']}>
        <span>
          <span>Second Home</span>
          <br></br>
          <span> Find your SecondHome in second</span>
        </span>
      </span>
    </div>
    )
}

export default Head ;