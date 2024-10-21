# React ToDo List App

This project is a simple **ToDo List** built with React, using **state management** and **component-based architecture** to add, delete, and update tasks.

## Features

- **Add New Tasks**: Users can input new tasks and add them to the list.
- **Delete Tasks**: Users can remove tasks from the list.
- **Mark Tasks as Completed**: Tasks can be marked as completed, changing their color to indicate status.
- **Unique Task IDs**: Each task is assigned a unique ID.

## Key Concepts

### State Management

- **useState Hook** is used to manage the list of tasks and new task input:

  ```jsx
  const [todoList, setTodoList] = useState([]); // Stores the list of tasks
  const [newTask, setNewTask] = useState("");  // Stores the value of the new task
  ```

### Adding a Task

- A task object containing an `id`, `taskName`, and `completed` status is created and added to the `todoList` array:

  ```jsx
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };

    setTodoList([...todoList, task]);
  }
  ```

### Deleting a Task

- Tasks can be removed by filtering out the task with the matching `id`:

  ```jsx
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }
  ```

### Updating a Task

- Toggle the `completed` status of a task using the `id`:

  ```jsx
  const updateTask = (id) => {
    setTodoList(todoList.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  }
  ```

### Task Component

Each task is displayed using the `Task` component, which receives props for the task's `id`, `taskName`, `completed` status, and event handlers to delete or update the task:

```jsx
export const Task = (props) => {
  return (
    <div className='listContainer'>
      <h1 style={{ color: props.completed ? "green" : "black" }}>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.updateTask(props.id)}>Completed</button>
    </div>
  );
}
```

## How to Run

1. Clone the repository.
2. Install dependencies by running:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

## Additional Info

- You can add, remove, or toggle tasks as you like.
- The completed tasks turn green.