import { useState } from 'react';
import Result from './Result';
import Input from './Input';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: null, operation: null });
  const onHandleClick = (e) => {
    const targetText = e.target.textContent;
    const newState = calculate(state, targetText);
    setState(newState);
  };
  return (
    <div className="math-rapper">
      <div className="math-text">Let&apos;s do some Math</div>
      <div className="calculator">
        <div className="math">
          <Result state={state} />
          <Input onHandleClick={onHandleClick} />
        </div>
      </div>
    </div>
  );
};
export default Calculator;
