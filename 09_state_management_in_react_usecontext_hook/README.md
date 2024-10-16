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

## Example

1. Open the app.
2. Navigate to the **Profile** page and change the `username`.
3. Go back to the **Home** page and notice the updated username displayed.