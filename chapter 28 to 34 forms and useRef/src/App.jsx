import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import './App.css';
import TodoItems from './components/TodoItems';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const initialTodos = [];

  const [todoItems, setTodoItems] = useState(initialTodos);

  const handleNewItem = (todoName, dueDate) => {
    setTodoItems((currentValue) => {
      const newTodoItems = [
        ...currentValue,
        { name: todoName, dueDate: dueDate },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItemsAfterDelete = todoItems.filter(
      (todo) => todo.name !== todoItemName
    );
    setTodoItems(newTodoItemsAfterDelete);
    console.log('item deleted', todoItemName);
  };

  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
