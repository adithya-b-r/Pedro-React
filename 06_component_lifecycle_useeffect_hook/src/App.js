import './App.css';
import { useState } from 'react';
import {Text} from './Text';

/* Three differnet stages in react life cycle :
  1. mounting - Starts appearing in the screen.
  2. updating - Component being changing the UI.
  3. unmounting - Stops appearing in the screen.
*/

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      {/* 1. Mounting and 3. Unmouting */}
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      {showText && <Text />}
    </div>
  );
}

export default App;