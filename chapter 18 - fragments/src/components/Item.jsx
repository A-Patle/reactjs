import styles from './Item.module.css';
const Items = ({ foodItem }) => {
  return (
    <>
      <li className={`list-group-item ${styles['food-item']}`}>
        <span className={styles['item-span']}>{foodItem}</span>
      </li>
    </>
  );
};
export default Items;
