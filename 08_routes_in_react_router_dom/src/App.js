import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';

function App() {
  return (
    <div className="App">

      {/* Everything related to React DOM must be inside <Router></Router> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />   {/* Whenever a user enters wrong path */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
