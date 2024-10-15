# React State Management with useState Hook

This project demonstrates several examples of state management using the `useState` hook in React.

## Features

- **useState Hook**: Manages state in functional components.
- Examples include:
  - Counter to increase, decrease, and reset values.
  - Dynamic input field handling.
  - Toggling text visibility.
  - Switching text color.

## Key Concepts

### 1. Counter Example
Manages a counter that can be increased, decreased, or reset using buttons.

```jsx
const [counter, setCounter] = useState(0);

return (
  <div className="App">
    <button onClick={() => setCounter(counter + 1)}>Increase</button>
    <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    <button onClick={() => setCounter(0)}>Set to Zero</button>
    <h1>{counter}</h1>
  </div>
);
```

### 2. Input Field Example
Captures user input and displays it dynamically as it is typed.

```jsx
const [inputValue, setinputValue] = useState("");

const handleInputChange = (event) => {
  setinputValue(event.target.value);
}

return (
  <div className="App">
    <input type="text" value={inputValue} onChange={handleInputChange} />
    <p>{inputValue}</p>
  </div>
);
```

### 3. Show/Hide Text Example
Toggles text visibility using a button.

```jsx
const [showText, setShowText] = useState(false);

return (
  <div className="App">
    <button onClick={() => setShowText(!showText)}>Show/Hide</button>
    {showText && <h1>Hi, My name is Adithya</h1>}
  </div>
);
```

### 4. Toggle Text Color Example
Changes the text color between black and red on button click.

```jsx
const [textColor, setTextColor] = useState("black");

return (
  <div className="App">
    <button onClick={() => setTextColor(textColor === "black" ? "red" : "black")}>Toggle Color</button>
    <h1 style={{color: textColor}}>Hi, My name is Adithya</h1>
  </div>
);
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