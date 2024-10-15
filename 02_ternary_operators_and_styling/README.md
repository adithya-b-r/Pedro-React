# Conditional Rendering and Inline Styling in React

This project demonstrates how to use **conditional rendering** and **inline styling** in React, along with some basic CSS integration.

## Features

- **Conditional Rendering**: Uses a ternary operator and logical `&&` to render elements based on conditions.
- **Inline Styling**: Demonstrates how to apply styles dynamically using JavaScript expressions within JSX.
- **Basic Arithmetic Operations**: Performs inline arithmetic calculations within JSX.

## Key Concepts

### Conditional Rendering
- The app checks if a user is eligible to drive based on age:

  ```jsx
  {age >= 18 ? <h1>You can drive</h1> : <h1>Wait for {18 - age} more years.</h1>}
  ```

- A button is conditionally displayed if `isGreen` is set to `true`:

  ```jsx
  {isGreen && <button>This is a button</button>}
  ```

### Inline Styling
- The app uses inline styling to change the color of a text dynamically based on the value of `isGreen`:

  ```jsx
  <h1 style={{color: isGreen ? "green" : "red"}}>This text has some color</h1>
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

- You can modify the `age` or `isGreen` variables to see how the UI changes.