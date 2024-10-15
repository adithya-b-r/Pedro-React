# React Component Lifecycle Demo

This project demonstrates React's component lifecycle stages—**mounting**, **updating**, and **unmounting**—using the `useEffect` hook. It also showcases the use of state and effects in functional components.

## Features

- **useState and useEffect Hooks**: Manages state and side effects in React functional components.
- **Component Lifecycle**:
  - **Mounting**: The component appears on the screen.
  - **Updating**: The component updates the UI when the state changes.
  - **Unmounting**: The component is removed from the DOM.

## Key Concepts

### 1. App Component

- The `App` component controls whether the `Text` component is shown or hidden, triggering the **mounting** and **unmounting** lifecycle events.

```jsx
function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      {showText && <Text />}
    </div>
  );
}
```

### 2. Text Component

- The `Text` component demonstrates **updating** and **unmounting** stages. It listens for changes in input and logs when the component is mounted, updated, or unmounted.

```jsx
export const Text = () => {
  const [text, setText] = useState("");

  // Runs on component mount and updates.
  useEffect(() => {
    console.log("Component mounted or updated");
  });

  // Runs only when `text` changes.
  useEffect(() => {
    console.log("Text has changed.");
  }, [text]);

  // Runs on component mount and unmount.
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    }
  }, []);

  return (
    <div>
      <input onChange={(event) => setText(event.target.value)} />
      <h1>{text}</h1>
    </div>
  );
}
```

### useEffect Hook

- The **useEffect** hook is utilized to handle side effects and lifecycle stages:
  - First `useEffect`: Logs every time the component is mounted or updated.
  - Second `useEffect`: Specifically watches the `text` state and logs when it changes.
  - Third `useEffect`: Logs when the component mounts and unmounts.

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

- The console logs the different lifecycle stages—mounting, updating, and unmounting—while interacting with the app.
- The `useEffect` hook plays a crucial role in managing side effects in functional components.