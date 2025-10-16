import styles from './Item.module.css';
const Items = ({ foodItem, bought, handleBuyButton }) => {
  
  return (
    <>
      <li
        className={`list-group-item ${styles['food-item']} ${
          bought && 'active' }`}>
        <span className={styles['item-span']}>{foodItem}</span>
        <button
            onClick={handleBuyButton}
          className={`${styles.button} btn btn-outline-info`}>
          Buy
        </button>
      </li>
    </>
  );
};
export default Items;
