function TodoItemTwo() {
  let todoName = 'Go TO college';
  let todoDate = '4/10/2024';
  return (
    <div className="container">
      <div className="row react-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger react-Button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItemTwo;
