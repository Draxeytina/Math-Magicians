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
            <div className="display">0</div>
            <div className="buttons">
              <div className="top row">
                <button type="button">AC</button>
                <button type="button">+/-</button>
                <button type="button">%</button>
                <button type="button" className="orange">÷</button>
                <button type="button">7</button>
                <button type="button">8</button>
                <button type="button">9</button>
                <button type="button" className="orange">x</button>
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
        </>,
      )
      .toJSON();
    expect(calcRendered).toMatchSnapshot();
  });
});
