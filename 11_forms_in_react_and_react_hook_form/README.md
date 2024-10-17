# React Form Validation with Yup and React Hook Form

This is a simple React application demonstrating form validation using `react-hook-form`, `yup`,
and `@hookform/resolvers/yup`. The form collects user information like full name, email, age, 
password, and confirm password.

## Features

- Full name, email, age, and password fields with validation.
- Validation errors are displayed in real-time.
- Password confirmation validation ensures passwords match.
- Custom error messages for invalid inputs.

## Project Structure

```
/src
  /Components
    Form.js
  App.js
  App.css
  index.js
```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Hook Form**: For managing form state and validation.
- **Yup**: For schema-based form validation.
- **@hookform/resolvers/yup**: Provides validation integration with Yup.

## Installation and Setup

1. Clone the repository.

2. Navigate to the project directory.
   ```bash
   cd react-form-validation
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
The main component that renders the `Form` component.

```js
import './App.css';
import { Form } from './Components/Form';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
```

### Form.js
The form component with validation logic using `react-hook-form` and `yup`.

```js
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    age: yup.number().positive().integer().min(18, "You must be at least 18 years old").required("Age is required"),
    password: yup.string().min(4, "Password must be at least 4 characters").max(20, "Password must be at most 20 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("Please confirm your password"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} /><br />
      <p>{errors.fullName?.message}</p>

      <input type="text" placeholder="Email..." {...register("email")} /><br />
      <p>{errors.email?.message}</p>

      <input type="number" placeholder="Age..." {...register("age")} /><br />
      <p>{errors.age?.message}</p>

      <input type="password" placeholder="Password..." {...register("password")} /><br />
      <p>{errors.password?.message}</p>

      <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} /><br />
      <p>{errors.confirmPassword?.message}</p>

      <input type="submit" />
    </form>
  );
};
```

## How It Works

- **Full Name**: Required field.
- **Email**: Must be a valid email format.
- **Age**: Must be a positive integer, at least 18.
- **Password**: Must be between 4 and 20 characters.
- **Confirm Password**: Must match the password field.

When the form is submitted, the input data is validated according to the Yup schema. If any validation errors are present, they are displayed next to the relevant input fields.