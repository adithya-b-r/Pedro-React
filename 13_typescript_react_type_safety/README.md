# React App with TypeScript: Person Component Example

This React project demonstrates how to use TypeScript in React by defining types for props and creating a `Person` component. The example covers prop validation, types for arrays, enums, and function typing.

## Features

- TypeScript integration in a React project.
- Strongly typed props in the `Person` component.
- Enum usage for selecting predefined values.
- Typing for functions, arrays, and object destructuring.

## Project Structure

```
/src
  ├── /Components
  │   └── Person.tsx
  ├── App.tsx
  └── App.css
```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript, enhancing code quality and developer productivity.

## Installation and Setup

1. Clone the repository.

2. Navigate to the project directory.
   ```bash
   cd react-typescript-app
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
The main component that renders the `Person` component and defines a function with typed arguments and return types.

```tsx
import './App.css';
import { Person, Country } from './Components/Person';

function App() {

  // Define a function with a typed argument 'name' (string) and return type (number)
  const getAge = (name: string): number => {
    return 99;
  }

  // Example usage of the getAge function
  console.log(getAge("")); // Can't pass a number as an argument due to type checking

  return (
    <div className="App">
      <Person 
        name="Adithya"             // String type
        email="abr@gmail.com"       // String type
        age={21}                    // Number type
        isMarried={false}           // Boolean type
        friends={["Cat 1", "Cat 2", "Cat 3"]}  // Array of strings
        country={Country.Brazil}    // Enum type
      />
    </div>
  );
}

export default App;
```

### Person.tsx
The `Person` component accepts various props, including strings, numbers, booleans, arrays, and enums. The props are strongly typed using TypeScript interfaces and enums.

```tsx
// Import necessary styles
import './App.css';

// Enum for predefined countries
export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  India = "India",
}

// Define the interface for the props accepted by the Person component
interface PersonProps {
  name: string;            // Required: person's name (string)
  email: string;           // Required: person's email (string)
  age: number;             // Required: person's age (number)
  isMarried: boolean;      // Required: marital status (boolean)
  friends: string[];       // Required: array of friends' names (array of strings)
  country: Country;        // Required: country (enum type)
}

// The Person component receives props based on the defined interface
export const Person = ({ 
  name, 
  email, 
  age, 
  isMarried, 
  friends, 
  country 
}: PersonProps) => {
  
  // Return JSX that displays the passed props in the UI
  return (
    <div>
      <h1>Person Details</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>{isMarried ? "Married" : "Not Married"}</p>
      <p>Country: {country}</p>

      <h2>Friends:</h2>
      {friends.map((friend) => (
        <p key={friend}>{friend}</p>  // Render each friend name from the array
      ))}
    </div>
  );
};
```

## How It Works

- **name**: A required string prop representing the person's name.
- **email**: A required string prop representing the person's email.
- **age**: A required number prop representing the person's age.
- **isMarried**: A boolean prop that indicates marital status.
- **friends**: An array of strings representing the person's friends.
- **country**: An enum type that restricts the country selection to predefined values.

The `Person` component uses TypeScript's strict typing, ensuring that only the correct types are passed to props. The function `getAge` demonstrates how to define a function that accepts and returns specific types.