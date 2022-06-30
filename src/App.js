/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/calculator';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-containter">
        <>
          <h1>Calculator</h1>
          <Calculator />
        </>
      </div>
    );
  }
}

export default App;
