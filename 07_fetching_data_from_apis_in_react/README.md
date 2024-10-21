# React API Demo Project

This project demonstrates how to use React along with the `Axios` library to fetch data from various public APIs. It includes three different components:
- **App**: Fetches and displays a random cat fact.
- **App2**: Predicts the age based on a name input.
- **App3**: Generates excuses based on different categories.

## Features

### 1. Cat Facts Generator (App.js)
Generates and displays random cat facts from the [Catfact Ninja API](https://catfact.ninja/).

- **API Used**: `https://catfact.ninja/fact`
- **Functionality**: 
  - Fetches a random cat fact when the page loads or when the button is clicked.
  - Displays the fetched cat fact.

### 2. Age Predictor (App2.js)
Predicts the likely age of a person based on their name using the [Agify API](https://agify.io/).

- **API Used**: `https://api.agify.io/?name=<name>`
- **Functionality**:
  - Input a name, and it predicts the likely age for that name.
  - Displays the name, predicted age, and the number of people with that name in the database.

### 3. Excuse Generator (App3.js)
Generates random excuses based on different categories like party, family, office, etc., using the [Excuser API](https://excuser.vercel.app/).

- **API Used**: `https://excuser-three.vercel.app/v1/excuse/<category>/`
- **Functionality**:
  - Choose a category from the provided buttons (party, family, office, etc.).
  - Generates and displays a random excuse for the selected category.

## How to Run

1. Clone the repository.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

## Code Breakdown

### `App.js` (Cat Fact Generator)

This component fetches random cat facts from an API and displays them. A new fact is fetched on page load and when the "Generate Cat Fact" button is clicked.

```jsx
useEffect(() => {
  fetchCatFact();
}, []);
```

### `App2.js` (Age Predictor)

Takes a name input from the user and predicts the person's age using the `Agify` API. It displays the predicted age along with the name and a count of how many people share the name in the database.

```jsx
Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  setPredictedAge(res.data);
});
```

### `App3.js` (Excuse Generator)

Generates random excuses based on the selected category. Categories include party, family, office, college, and unbelievable excuses.

```jsx
Axios.get(`https://excuser-three.vercel.app/v1/excuse/${userExcuse}/`).then((res) => {
  setExcuse(res.data[0].excuse);
});
```

## Additional Information

This project demonstrates:
- How to use `Axios` to make API requests.
- Conditional rendering in React using buttons to trigger different API calls.
- The use of React hooks like `useState` for managing state and `useEffect` for handling side effects such as fetching data when components mount.