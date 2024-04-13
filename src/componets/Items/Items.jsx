// AccommodationList.jsx
import React from 'react';
import Item from '../Item/Item';
import styles from "./items.module.css";

const Items = ({ accommodations  }) => {
  return (
    <div className={styles["card-container"]}>
    <div className="row  row-cols-md-4 g-4">
    {accommodations.map((accommodation, index) => (
          <Item
            key={index}
            title={accommodation.title}
            price={accommodation.price}
            location={accommodation.location}
            image={accommodation.image}
           
          />
          ))}
    </div>
    </div>
  );
};

export default Items;
