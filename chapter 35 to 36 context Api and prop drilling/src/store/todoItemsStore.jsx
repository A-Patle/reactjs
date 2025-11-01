import { createContext } from 'react';
import { useReducer } from 'react';

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currentState, action) => {
  let newTodoItems = currentState;
  if (action.type === 'NEW_ITEM') {
    newTodoItems = [
      ...currentState,
      { name: action.payload.todoName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === 'DELETE_ITEM') {
    newTodoItems = currentState.filter(
      (todo) => todo.name !== action.payload.todoName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const initialTodos = [];

  // const [todoItems, setTodoItems] = useState(initialTodos);
  const [todoItems, dispatchTodoItems] = useReducer(
    todoItemReducer,
    initialTodos
  );

  const addNewItem = (todoName, dueDate) => {
    const newItemAction = {
      type: 'NEW_ITEM',
      payload: {
        todoName,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
    // setTodoItems((currentValue) => {
    //   const newTodoItems = [
    //     ...currentValue,
    //     { name: todoName, dueDate: dueDate },
    //   ];
    //   return newTodoItems;
    // });
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload: {
        todoName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
    // const newTodoItemsAfterDelete = todoItems.filter(
    //   (todo) => todo.name !== todoItemName
    // );
    // setTodoItems(newTodoItemsAfterDelete);
    // console.log('item deleted', todoItemName);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
