import './App.css';
import { useState } from 'react';

/*In React Component are rendered only once. If we increment a 
variable it's new value won't be displayed. So we use useState.*/

function App() {
  /*const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="App">
      {count}
      <br></br>
      <button onClick={increaseCount}>Click Me</button>
    </div>
  );*/

  /*const [inputValue, setinputValue] = useState("");

  const handleInputChange = (event) => {
    setinputValue(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>{inputValue}</p>
    </div>
  )*/

  /*const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Show/Hide</button>
      {showText && <h1>Hi, My name is Adithya</h1>}
    </div>
  );*/

  /*const [textColor, setTextColor] = useState("black");

  return (
    <div className="App">
      <button onClick={() => setTextColor(textColor == "black" ? "red" : "black")}>Toggle Color</button>
      <h1 style={{color: textColor}}>Hi, My name is Adithya</h1>
    </div>
  );*/

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setCounter(0)}>Set to Zero</button>
      <h1>{counter}</h1>
    </div>
  );

}

export default App;