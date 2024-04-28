// AccommodationList.jsx
import React from 'react';
import ItemOwner from '../Item owner/ItemOwner';
import styles from "./items.module.css";

const ItemsOwner = ({ accommodations  }) => {
  return (
    <div className={styles["card-container"]}>
    <div className="row  row-cols-md-3 g-3">
    {accommodations.map( accommodation  => (
          <ItemOwner
            key={accommodation.id}
            id={accommodation.id}
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

export default ItemsOwner;



