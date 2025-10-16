import styles from './ButtonsContainer.module.css';

function ButtonsContainer({ onButtonClick }) {
const buttonNames = [
  'C', '<-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=', 
];

  return (
    <div className={styles['button-container']}>
      {buttonNames.map((btnName) => (
        <button
          key={btnName}
          className={`${styles.button} ${btnName === '=' ? styles.equals : ''}`}
          onClick={() => onButtonClick(btnName)}>
          {btnName}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
