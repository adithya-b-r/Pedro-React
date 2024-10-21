# React User List with Component Mapping

This project demonstrates how to render a list of users using the **map** function and **props** in React.

## Features

- **Array Mapping**: Renders a list of users from an array using the `map()` function.
- **Reusable Component**: The `User` component is used to display individual user details.
- **Props**: Passes user data (id, name, age) to the `User` component via props.
- **Keys**: Uses a unique `key` prop to avoid console warnings during list rendering.

## Key Concepts

### Array Mapping

The app maps through the `users` array and dynamically generates `User` components:

```jsx
const users = [
  { id: 1, name: "Adithya", age: 20 },
  { id: 2, name: "Doraemon", age: 12 },
  { id: 3, name: "Shinchan", age: 5 }
];

return (
  <div className="App">
    {users.map((user, key) => {
      return <User key={key} id={user.id} name={user.name} age={user.age} />
    })}
  </div>
);
```

### `User` Component

The `User` component takes in three props: `id`, `name`, and `age`, and displays them:

```jsx
export const User = (props) => {
  return (
    <div>
      UserID: {props.id}, Name: {props.name}, Age: {props.age}
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

- You can modify the `users` array to add or remove users and see the list dynamically update.
- Make sure to provide a unique `key` for each item when rendering lists in React.