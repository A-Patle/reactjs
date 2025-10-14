import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';
function TodoItems({ todoItems }) {
  return (
    <div className={styles['itemsContainer']}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
}
export default TodoItems;
