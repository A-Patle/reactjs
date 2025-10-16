import styles from './FoodInput.module.css';
function FoodInput({ handleKeyDown}) {

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Enter food Item here..."
      onKeyDown={handleKeyDown}
    />
  );
}

export default FoodInput;
