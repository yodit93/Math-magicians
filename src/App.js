import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <div className="math-rapper">
        <div className="math-text">Let&apos;s do some Math</div>
        <Calculator />
      </div>
      <Quote />
    </div>
  );
}

export default App;
