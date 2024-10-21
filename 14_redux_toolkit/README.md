# Redux with React Router Example

This project demonstrates the integration of **Redux** with **React Router** in a simple React application. It features basic routing and state management using **Redux Toolkit**.

## Features

- **Redux** for global state management.
- **React Router** for client-side routing between pages.
- Simple login/logout functionality with username persistence in Redux store.
- Pages: Home, Login, Contact.

## Project Structure

```
/src
  ├── /pages
  │   ├── Home.tsx
  │   ├── Login.tsx
  │   └── Contact.tsx
  ├── store.tsx
  ├── App.tsx
  ├── index.tsx
  └── App.css
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For navigation between pages in the app.
- **Redux Toolkit**: Simplifies Redux state management.
- **TypeScript**: Provides type safety and code intelligence.

## Installation and Setup

1. Clone the repository.

2. Navigate to the project directory.
   ```bash
   cd redux-react-router-example
   ```

3. Install the required dependencies.
   ```bash
   npm install
   ```

4. Start the development server.
   ```bash
   npm start
   ```

5. Open the browser at `http://localhost:3000` to view the application.

## Code Overview

### App.tsx
The root component where routes are defined and Redux store is provided to the entire app.

```ts
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Provider } from 'react-redux'; // Similar to Context API
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {/* Navigation links */}
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact</Link>

          {/* Route Definitions */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
```

### store.tsx
The Redux store configuration using **Redux Toolkit** with a simple user slice.

```ts
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" } };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
```

### Home.tsx
The home page that displays the username stored in the Redux state.

```ts
import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <h1>This is the Home Page, Welcome {username}!</h1>
  );
};
```

### Login.tsx
The login page that allows updating the username in the Redux state and logout functionality.

```ts
import { login, logout } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const Login = () => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
      <h1>This is the Login Page, {username}</h1>
      <input onChange={(e) => setNewUsername(e.target.value)} placeholder="Enter Username" />
      <button onClick={() => dispatch(login({ username: newUsername }))}>Submit Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
```

### Contact.tsx
A simple contact page.

```ts
export const Contact = () => {
  return <h1>This is the Contact Page</h1>;
};
```

## How It Works

- **Redux State**: A simple `username` state is managed globally.
- **Login/Logout**: User can log in by updating the username in the Redux state and log out to clear the state.
- **React Router**: Allows navigation between Home, Login, and Contact pages without refreshing the page.

This project demonstrates the basic principles of using **Redux** for state management and **React Router** for page navigation in a React app.