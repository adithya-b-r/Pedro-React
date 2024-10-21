import './App.css';
import { useToggle } from './useToggle';
import { Cat } from './Components/Cat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//Creating custom Hooks. custom Hooks start from 'use'

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  })

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

/*function App() {
  // const [isVisible, toggle] = useToggle();
  const { state: isVisible1, toggle: toggle1 } = useToggle();
  const { state: isVisible2, toggle: toggle2 } = useToggle();

  return (
    <div className="App">
      <button onClick={toggle1}>
        {isVisible1 ? "Hide" : "Show"}
      </button>
      {isVisible1 && <h1>Hidden Text</h1>}

      <button onClick={toggle2}>
        {isVisible2 ? "Hide" : "Show"}
      </button>
      {isVisible2 && <h1>Hidden Text</h1>}
    </div>
  );
}*/

/*function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}*/

export default App;
