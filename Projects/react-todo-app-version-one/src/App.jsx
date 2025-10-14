import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItemOne from './components/TodoItemOne';
import TodoItemTwo from './components/TodoItemTwo';
import './App.css';

function App() {
  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo />
      <div className="itemsContainer">
        <TodoItemOne />
        <TodoItemTwo />
      </div>
    </center>
  );
}

export default App;
