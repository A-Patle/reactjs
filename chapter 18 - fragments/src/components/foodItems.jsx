import Items from './Item';

function FoodItems({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Items key={item} foodItem={item} />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
