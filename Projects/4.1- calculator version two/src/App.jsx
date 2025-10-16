import { useState } from 'react';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';

function App() {
  const [calVal, setCalVal] = useState('');

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal('');
    } else if (buttonText === '=') {
      setCalVal(eval(calVal));
    } else if (buttonText === '<-') {
      setCalVal(calVal.slice(0, -1));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles['calculator']}>
      <h1>Calculator App</h1>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
