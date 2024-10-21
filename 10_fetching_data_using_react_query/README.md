# React Query Cat Facts App

This project is a React application that fetches random cat facts from an API using **React Query** for data fetching and state management. The app demonstrates how to use `@tanstack/react-query` to handle API requests efficiently with React Router for navigation.

## Features

- Fetches random cat facts from the `catfact.ninja` API.
- Displays loading state while fetching data.
- Handles error state if the API request fails.
- Allows refreshing the data by clicking an "Update Data" button.
- Uses `react-router-dom` for routing between pages.
- Configures React Query to prevent refetching data when switching back to the browser tab.

## Project Structure

```
/src
  /pages
    Home.js
    Navbar.js
  App.js
  App.css
  index.js
```

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For handling routing between pages.
- **React Query**: For fetching and caching API data.
- **Axios**: For making HTTP requests to the API.

## How to Run the Project

### Prerequisites

Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

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


### Using the App

- The app will display a random cat fact when the Home page loads.
- If you want a new cat fact, click the **Update Data** button.

## Code Overview

### `App.js`

This is the main component where routing and React Query configuration are handled.

```js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './pages/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,  // Disable refetching data when switching back to the tab
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
```

### `Home.js`

This component fetches and displays random cat facts using React Query’s `useQuery` hook. It handles loading and error states, and includes a button to manually refresh the data.

```js
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data: catData, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isError) {
    return <h1>Error...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>THIS IS THE HOME PAGE
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Update Data</button>
    </h1>
  );
};
```

### `Navbar.js`

A simple navigation bar to move between pages.

```js
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};
```

### `index.js`

This is the entry point of the React app where the main component `App.js` is rendered to the DOM.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.