import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItems from './components/foodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {

  let [foodItems, setFoodItems] = useState(['Sabji', 'Rice', 'Chapati', 'Sabzi', 'Salad']);

  const onKeyDown = (event) => {
    console.log(event.target.value);
    // setTextToShowUser(event.target.value);
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading"> Healthy Food </h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
