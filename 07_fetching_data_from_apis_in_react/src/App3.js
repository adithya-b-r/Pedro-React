import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App3() {
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (userExcuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${userExcuse}/`).then((res) => {
      setExcuse(res.data[0].excuse);
    })
  }

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => {fetchExcuse("party");}}>Party</button>
      <button onClick={() => {fetchExcuse("family");}}>Family</button>
      <button onClick={() => {fetchExcuse("office");}}>Office</button>
      <button onClick={() => {fetchExcuse("college");}}>College</button>
      <button onClick={() => {fetchExcuse("unbelievable");}}>Unbelievable</button>
      <h4>{excuse}</h4>
    </div>
  );
}

export default App3;
