import './App.css'; //Importing Css File

function App() {
  const age = 21;
  const isGreen = true;
  return (
    <div className="App">
      {/* <h1 className='meow'>Hello, CSS</h1> */}

      {/* Using ternary operator and inline arithmetic operation */}
      {age >= 18 ? <h1>You can drive</h1> : <h1>Wait for {18 - age} more years.</h1>}

      {/* Using ternary operator with inline styling*/}
      <h1 style={{color: isGreen ? "green" : "red"}}>This text has some color</h1>

      {/* To display a button is isGreen is set to true */}
      {isGreen && <button>This is a button</button>}
    </div>
  );
}

export default App;