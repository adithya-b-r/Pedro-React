# React Context API with Router Example

This project demonstrates how to use React's Context API along with React Router to manage and share state across different components in a web application.

## Features

- **React Router**: Implements navigation between `Home`, `Profile`, and `Contact` pages.
- **Context API**: Shares a global `username` state between components, allowing it to be updated from different pages.
- **Dynamic Username Update**: The `Profile` page includes a form to change the username, which reflects in all components that consume the context.

## Project Structure

```
/src
  ├── /components
  │   └── ChangeProfile.js      # Component to update username
  ├── /pages
  │   ├── Contact.js            # Contact page
  │   ├── Home.js               # Home page
  │   ├── Profile.js            # Profile page with username change functionality
  │   └── Navbar.js             # Navigation bar component
  ├── App.js                    # Main app file, contains routing and context provider
  ├── App.css                   # Styles
  └── index.js                  # Entry point of the application
```

## Code

### `App.js`

```javascript
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('Adithya');

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
```

### `ChangeProfile.js`

```javascript
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input onChange={(event) => setNewUsername(event.target.value)} />
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  );
};
```

### `Home.js`

```javascript
import { useContext } from 'react';
import { AppContext } from '../App';

export const Home = () => {
  const { username } = useContext(AppContext);
  return <h1>THIS IS THE HOME PAGE AND USERNAME: {username}</h1>;
};
```

### `Profile.js`

```javascript
import { ChangeProfile } from '../components/ChangeProfile';
import { useContext } from 'react';
import { AppContext } from '../App';

export const Profile = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      PROFILE, User is: {username}
      <ChangeProfile />
    </div>
  );
};
```

### `Contact.js`

```javascript
export const Contact = () => {
  return <h1>THIS IS THE CONTACT PAGE</h1>;
};
```

### `Navbar.js`

```javascript
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
```

### `index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## How to Run

1. **Clone the repository.**

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the application:**

   ```bash
   npm start
   ```

   The app will start on `http://localhost:3000`.

## Pages

- **Home Page**: Displays the current `username` from the context.
- **Profile Page**: Displays the `username` and includes a form to update it.
- **Contact Page**: Static contact information page.
- **404 Page**: A simple "Page Not Found" message for invalid routes.

## App Flow

1. The `AppContext` is created using `createContext` and provides the `username` and `setUsername` functions to all child components.
2. The `Navbar` provides navigation between different routes.
3. The `Home` and `Profile` pages consume the `username` from the context.
4. The `ChangeProfile` component in the `Profile` page allows users to change the `username` dynamically, and this update reflects throughout the app.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Enables routing and navigation between different components.
- **Context API**: Manages global state (`username`).