import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Jest Snapshot test for Calculator', () => {
  it('renders the component', () => {
    const calcSnapshot = render(<Calculator />);
    expect(calcSnapshot).toMatchSnapshot();
  });

  it('snapshot testing the calculator component', () => {
    const calcRendered = renderer
      .create(
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
        </>,
      )
      .toJSON();
    expect(calcRendered).toMatchSnapshot();
  });
});
