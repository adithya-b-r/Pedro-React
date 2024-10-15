# React Component Lifecycle Demo with Strict Mode

This project demonstrates React's component lifecycle stages—**mounting**, **updating**, and **unmounting**—using the `useEffect` hook. It also showcases **React Strict Mode**, which helps in identifying potential problems in an application by running certain lifecycle methods more than once in development mode.

## Features

- **useState and useEffect Hooks**: Manages state and side effects in React functional components.
- **Component Lifecycle**:
  - **Mounting**: The component appears on the screen.
  - **Updating**: The component updates the UI when the state changes.
  - **Unmounting**: The component is removed from the DOM.
- **React Strict Mode**: Wraps components to highlight potential issues during development.

## Key Concepts

### 1. Strict Mode

**React Strict Mode** is a tool for highlighting potential problems in your React application. It does not render any visible UI but helps in writing better React code by:
- Identifying unsafe lifecycles.
- Warning about deprecated APIs.
- Running `useEffect` and other lifecycle methods twice during development to help detect issues.

Strict Mode is enabled by default when wrapping your app with `<React.StrictMode>` in `index.js`:

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 2. App Component

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

### 3. Text Component

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

- **Strict Mode** will invoke certain lifecycle methods (like `useEffect`) more than once in development mode, helping identify potential problems.
- The console logs the different lifecycle stages—mounting, updating, and unmounting—while interacting with the app.