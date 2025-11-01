import { useContext } from 'react';
import styles from './TodoItem.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { TodoItemsContext } from '../store/todoItemsStore';

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className={`row ${styles['react-row']}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${styles['react-Button']}`}
            onClick={() => deleteItem(todoName)}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
