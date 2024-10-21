export const Task = (props) => {
  return (
    <div className='listContainer' key={props.key}>
      <h1 style={{ color: props.completed ? "green" : "black" }}>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.updateTask(props.id)}>Completed</button>
    </div>
  );
}