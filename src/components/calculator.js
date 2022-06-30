/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent = (event) => {
    this.setState((state) => calculate(state, event.target.textContent));
  };

  render() {
    const { next, operation, total } = this.state;
    const displayScreen = () => next || operation || total || '0';
    return (
      <div className="container">
        <div className="display">{displayScreen()}</div>
        <div className="buttons">
          <div className="top row">
            <button type="button" onClick={this.handleClickEvent}>AC</button>
            <button type="button" onClick={this.handleClickEvent}>+/-</button>
            <button type="button" onClick={this.handleClickEvent}>%</button>
            <button type="button" onClick={this.handleClickEvent} className="orange">÷</button>
            <button type="button" onClick={this.handleClickEvent}>7</button>
            <button type="button" onClick={this.handleClickEvent}>8</button>
            <button type="button" onClick={this.handleClickEvent}>9</button>
            <button type="button" onClick={this.handleClickEvent} className="orange">x</button>
            <button type="button" onClick={this.handleClickEvent}>4</button>
            <button type="button" onClick={this.handleClickEvent}>5</button>
            <button type="button" onClick={this.handleClickEvent}>6</button>
            <button type="button" onClick={this.handleClickEvent} className="orange">-</button>
            <button type="button" onClick={this.handleClickEvent}>1</button>
            <button type="button" onClick={this.handleClickEvent}>2</button>
            <button type="button" onClick={this.handleClickEvent}>3</button>
            <button type="button" onClick={this.handleClickEvent} className="orange">+</button>
          </div>
          <div className="bottom">
            <button type="button" onClick={this.handleClickEvent}>0</button>
            <button type="button" onClick={this.handleClickEvent}>.</button>
            <button type="button" onClick={this.handleClickEvent} className="orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
