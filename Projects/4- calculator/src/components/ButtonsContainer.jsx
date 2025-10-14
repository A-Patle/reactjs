import styles from './ButtonsContainer.module.css';

function ButtonsContainer() {
  const buttonNames = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.',
  ];

  return (
    <div className={styles['button-container']}>
      {buttonNames.map((btnName) => (
        <button className={styles['button']}>{btnName}</button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
