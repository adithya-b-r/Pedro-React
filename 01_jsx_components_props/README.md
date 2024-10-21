# React User Profile Display

This project is a basic React app that demonstrates how to pass and display user information using **props**.

## Features

- Displays a user's name, age, and email using props.
- Example of how to create and use components in React.
  
## Components

### `User` Component
The `User` component takes the following props:

- **name** (String): The name of the user.
- **age** (Number): The age of the user.
- **email** (String): The email of the user.

### App Component
- The main `App` component renders multiple `User` components by passing different sets of props (name, age, email).

## Example

```jsx
<User name='Adithya' age={21} email='adithya@gmail.com'/>
<User name='Adithya 2' age={21} email='adithya2@gmail.com'/>
<User name='Adithya 3' age={21} email='adithya3@gmail.com'/>
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