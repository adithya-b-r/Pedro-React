# React Router Example Project

This project demonstrates how to create a multi-page application using **React Router**. It includes three pages: Home, Menu, and Contact. The navigation between these pages is handled by a `Navbar` component, and if a user navigates to a route that does not exist, a "Page Not Found" message is displayed.

## Features

- **React Router** for navigation between different pages
- **Dynamic Routing** with `Route` and `Routes` components
- **Navbar** for easy navigation between pages
- **Error Handling** for undefined routes with a "Page Not Found" message

## Pages

- **Home**: The landing page of the application.
- **Menu**: Displays the menu of the application.
- **Contact**: Contact details of the application.
- **Page Not Found**: Error message displayed for any incorrect or undefined URL.

## Project Structure

```bash
src/
│
├── App.js               # Main file to manage routes and navbar
├── pages/
│   ├── Home.js          # Home page component
│   ├── Menu.js          # Menu page component
│   ├── Contact.js       # Contact page component
│   └── Navbar.js        # Navbar component for navigation
└── index.js             # Entry point of the React application
```

## Code

### `index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
```

### `App.js`

```javascript
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

### `Navbar.js`

```javascript
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
```

### `Home.js`

```javascript
export const Home = () => {
  return <h1>THIS IS THE HOME PAGE</h1>;
};
```

### `Menu.js`

```javascript
export const Menu = () => {
  return <h1>THIS IS THE MENU PAGE</h1>;
};
```

### `Contact.js`

```javascript
export const Contact = () => {
  return <h1>THIS IS THE CONTACT PAGE</h1>;
};
```

## How to Run the Project

1. **Clone the repository**

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **View the application in the browser:**

   The application will run on `http://localhost:3000`.

## Dependencies

- **React**: Frontend library for building the UI.
- **React Router**: For implementing routing and navigation in the app.

## Usage

- Navigate to `/` for the Home page.
- Navigate to `/menu` for the Menu page.
- Navigate to `/contact` for the Contact page.
- Any other path will display the "Page Not Found" message.