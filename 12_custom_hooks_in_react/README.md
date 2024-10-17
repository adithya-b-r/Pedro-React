# React Custom Hooks with React Query

This React application demonstrates the use of custom hooks along with React Query for fetching and managing data. It specifically fetches cat facts from an API and allows the user to toggle visibility of content.

## Features

- Fetches a random cat fact using the Cat Facts API.
- Utilizes custom hooks for state management.
- Allows refetching of cat facts with a button click.
- Displays loading state while data is being fetched.

## Project Structure

```
/src
  ├── /Components
  │   └── Cat.js
  ├── App.js
  ├── useToggle.js
  └── useGetCat.js
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Query**: For managing server state and caching data.
- **Axios**: For making HTTP requests.

## Installation and Setup

1. Clone the repository.

2. Navigate to the project directory.
   ```bash
   cd react-custom-hooks
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

### App.js
The main component that sets up the React Query client and renders the `Cat` component.

```javascript
import './App.css';
import { Cat } from './Components/Cat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App;
```

### useToggle.js
A custom hook for managing boolean state, which can be toggled between true and false.

```javascript
import { useState } from 'react';

export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  }

  return { state, toggle };
}
```

### useGetCat.js
A custom hook that uses React Query to fetch a cat fact from the API.

```javascript
import { useQuery } from '@tanstack/react-query';
import Axios from "axios";

export const useGetCat = () => {
  const { data, refetch, isLoading: isCatLoading } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  const refetchData = () => {
    alert("REFETCH DATA");
    refetch();
  }

  return { data, refetchData, isCatLoading };
}
```

### Components/Cat.js
The component that utilizes the `useGetCat` hook to display cat facts and a button to refetch the data.

```javascript
import { useGetCat } from "../useGetCat";

export const Cat = () => {
  const { data, refetchData, isCatLoading } = useGetCat();

  if (isCatLoading) return <h1>Loading...</h1>

  return (
    <div>
      <button onClick={refetchData}>Refetch</button>
      <h1>{data?.fact}</h1>
    </div>
  );
}
```

## How It Works

- The `App` component sets up the React Query client and provides it to the application.
- The `Cat` component fetches a random cat fact and displays it, along with a button to refetch the fact.
- The `useGetCat` hook manages the API call and caching of the cat fact.
- The `useToggle` hook can be used to manage visibility states, although it's not utilized in this version.

This application showcases how to effectively manage API requests and state in a React application using custom hooks and React Query.