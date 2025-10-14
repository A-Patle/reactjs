import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItems from './components/foodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  // let foodItems = [];
  let foodItems = ['Sabji', 'Rice', 'Chapati', 'Sabzi', 'Salad'];

  return (
    <>
      <h1 className="food-heading"> Healthy Food </h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
