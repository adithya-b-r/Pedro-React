import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]); //Initially empty array.
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };

    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const updateTask = (id) => {
    setTodoList(todoList.map((task) => task.id === id ? task.completed ? { ...task, completed: false } : { ...task, completed: true } : task));
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleNewTask} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task, key) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              key={key}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;