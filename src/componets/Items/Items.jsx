// AccommodationList.jsx
import React from 'react';
import Item from '../Item/Item';
import styles from "./items.module.css";

const Items = ({ accommodations  }) => {
  return (
    <div className={styles["card-container"]}>
    <div className="row  row-cols-md-3 g-3">
    {accommodations.map( accommodation  => (
          <Item
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

export default Items;


// const Items = ({ accommodations ,likedItems, onToggleLike }) => {
//   return (
//     <div className={styles["card-container"]}>
//     <div className="row  row-cols-md-4 g-4">
//     {accommodations.map( accommodation  => (
//           <Item
//             key={index}
//             id={accommodation.id}
//             title={accommodation.title}
//             price={accommodation.price}
//             location={accommodation.location}
//             image={accommodation.image}
//             isLiked={likedItems.includes(accommodation.id)}
//           onToggleLike={() => onToggleLike(accommodation.id)}
           
//           />
//           ))}
//     </div>
//     </div>
//   );
// };





// const Items = ({ accommodations ,likedItems, onToggleLike }) => {
//   return (
//     <div className={styles["card-container"]}>
//     <div className="row  row-cols-md-4 g-4">
//     {accommodations.map( accommodation  => (
//           <Item
//             key={index}
//             id={accommodation.id}
//             title={accommodation.title}
//             price={accommodation.price}
//             location={accommodation.location}
//             image={accommodation.image}
//             isLiked={likedItems.includes(accommodation.id)}
//           onToggleLike={() => onToggleLike(accommodation.id)}
           
//           />
//           ))}
//     </div>
//     </div>
//   );
// };