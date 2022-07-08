/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';
import NavSection from './components/navSection';
import Home from './components/home';
import Quote from './components/quote';

const App = () => (
  <BrowserRouter>
    <NavSection />
    <Routes>
      <Route
        path="/Calculator"
        element={(
          <div className="App">
            <Calculator />
          </div>
      )}
      />
      <Route
        path="/"
        element={(
          <Home />
      )}
      />
      <Route
        path="/quote"
        element={(
          <Quote />
      )}
      />
    </Routes>
  </BrowserRouter>

);

export default App;
