import PropTypes from 'prop-types';

const Input = ({ onHandleClick }) => (
  <div className="grid">
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">AC</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">+/-</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">%</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item division color">÷</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">7</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">8</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">9</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item color">x</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">4</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">5</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">6</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item color">-</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">1</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">2</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">3</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item color">+</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item item0">0</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item">.</button>
    <button type="button" onClick={(e) => onHandleClick(e)} className="item color">=</button>
  </div>
);

Input.propTypes = {
  onHandleClick: PropTypes.func.isRequired,
};

export default Input;
