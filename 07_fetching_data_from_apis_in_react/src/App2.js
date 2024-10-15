import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App2() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    })
  }

  return (
    <div className="App">
      <h1>Age Predictor</h1>
      <input placeholder='Enter a name...' onChange={(event) => setName(event.target.value)} />
      <button onClick={fetchData}>Predict Age</button>
      <p>Name: {predictedAge?.name}, Predicted Age: {predictedAge?.age}, Count: {predictedAge?.count}</p>
    </div>
  );
}

export default App2;
