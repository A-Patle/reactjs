import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import './App.css';
import TodoItems from './components/TodoItems';

function App() {
  const todoItems = [
    { name: 'Buy Milk', dueDate: '4/10/2023' },
    { name: 'Walk the Dog', dueDate: '4/11/2023' },
    { name: 'Walk the Dog', dueDate: '4/11/2023' },
    { name: 'Walk the Dog', dueDate: '4/11/2023' },
    { name: 'Walk the Dog', dueDate: '4/11/2023' },
  ];

  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
