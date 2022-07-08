/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = React.useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const handleClickEvent = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };

  const { next, operation, total } = state;
  const displayScreen = () => next || operation || total || '0';

  return (
    <>
      <div>
        <p className="math">Lets do some math!</p>
      </div>
      <div className="container">
        <div className="display">{displayScreen()}</div>
        <div className="buttons">
          <div className="top row">
            <button type="button" onClick={handleClickEvent}>AC</button>
            <button type="button" onClick={handleClickEvent}>+/-</button>
            <button type="button" onClick={handleClickEvent}>%</button>
            <button type="button" onClick={handleClickEvent} className="orange">÷</button>
            <button type="button" onClick={handleClickEvent}>7</button>
            <button type="button" onClick={handleClickEvent}>8</button>
            <button type="button" onClick={handleClickEvent}>9</button>
            <button type="button" onClick={handleClickEvent} className="orange">x</button>
            <button type="button" onClick={handleClickEvent}>4</button>
            <button type="button" onClick={handleClickEvent}>5</button>
            <button type="button" onClick={handleClickEvent}>6</button>
            <button type="button" onClick={handleClickEvent} className="orange">-</button>
            <button type="button" onClick={handleClickEvent}>1</button>
            <button type="button" onClick={handleClickEvent}>2</button>
            <button type="button" onClick={handleClickEvent}>3</button>
            <button type="button" onClick={handleClickEvent} className="orange">+</button>
          </div>
          <div className="bottom">
            <button type="button" onClick={handleClickEvent}>0</button>
            <button type="button" onClick={handleClickEvent}>.</button>
            <button type="button" onClick={handleClickEvent} className="orange">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
