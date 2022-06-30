/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="display">
          <input className="displayScreen" type="text" placeholder="0" />
        </div>
        <div className="buttons">
          <div className="top row">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="orange">÷</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="orange">*</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="orange">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="orange">+</button>
          </div>
          <div className="bottom">
            <button type="button">0</button>
            <button type="button">.</button>
            <button type="button" className="orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
