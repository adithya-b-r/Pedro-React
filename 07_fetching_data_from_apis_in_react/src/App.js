import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
  }

  // To Fetch data initially, when page loads.
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <h1>Generates Cat Fact</h1>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
