import { useState } from 'react';
import Items from './Item';

function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    console.log(item, 'item');
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
