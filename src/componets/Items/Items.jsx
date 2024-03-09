// AccommodationList.jsx
import React from 'react';
import Item from '../Item/Item';
import styles from "./items.module.css";

const Items = ({ accommodations }) => {
  return (
    <div className={styles["card-container"]}>
    <div className="row  row-cols-md-4 g-4">
      {accommodations.map(accommodation => (
        <Item key={accommodation.id} accommodation={accommodation} />
       
      ))}
      
    </div>
    </div>
  );
};

export default Items;
