import { useRef } from 'react';
import styles from './AddTodo.module.css';
import { IoIosAddCircle } from 'react-icons/io';

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = '';
    dueDateElement.current.value = '';
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form
        className={`row ${styles['react-row']}`}
        onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles['input-box']}
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input
            className={styles['input-box']}
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button className={`btn btn-success ${styles['react-Button']}`}>
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
