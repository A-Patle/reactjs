import styles from './AddTodo.module.css';
function AddTodo() {
  return (
    <div className="container text-center">
      <div className={`row ${styles['react-row']}`}>
        <div className="col-6">
          <input
            className={styles['input-box']}
            type="text"
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input className={styles['input-box']} type="date" />
        </div>
        <div className="col-2">
          <button type="button" className={`btn btn-success ${styles['react-Button']}`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
