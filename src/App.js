import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
