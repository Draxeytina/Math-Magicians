import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
// import renderer from 'react-test-renderer';
import App from '../App';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  test('The default value of the calculator screen is 0', () => {
    const displayScreen = render(<Calculator />).container.querySelector('.display');
    expect(displayScreen.innerHTML).toBe('0');
  });

  test('Addition', () => {
    const calc = render(<Calculator />);
    const displayScreen = calc.container.querySelector('.display');
    let button = calc.getByText('4');
    fireEvent.click(button);
    expect(displayScreen.innerHTML).toBe('4');
    button = calc.getByText('+');
    fireEvent.click(button);
    expect(displayScreen.innerHTML).toBe('+');
    button = calc.getByText('2');
    fireEvent.click(button);
    button = calc.getByText('0');
    fireEvent.click(button);
    expect(displayScreen.innerHTML).toBe('20');
    button = calc.getByText('=');
    fireEvent.click(button);
    expect(displayScreen.innerHTML).toBe('24');
  });

  test('Division', () => {
    const calc = render(<Calculator />);
    const displayScreen = calc.container.querySelector('.display');
    let button = calc.getByText('5');
    fireEvent.click(button);
    button = calc.getByText('÷');
    fireEvent.click(button);
    button = calc.getByText('5');
    fireEvent.click(button);
    button = calc.getByText('=');
    fireEvent.click(button);
    expect(displayScreen.innerHTML).toBe('1');
  });

  test('Division by 0', () => {
    const calc = render(<Calculator />);
    const displayScreen = calc.container.querySelector('.display');
    let button = calc.getByText('9');
    fireEvent.click(button);
    button = calc.getByText('÷');
    fireEvent.click(button);
    button = calc.getByText('0');
    fireEvent.click(button);
    button = calc.getByText('=');
    fireEvent.click(button);
    expect(displayScreen.innerHTML).toBe("Can't divide by 0.");
  });

  test('Multiplication', () => {
    const calc = render(<Calculator />);
    const displayScreen = calc.container.querySelector('.display');
    let button = calc.getByText('1');
    fireEvent.click(button);
    button = calc.getByText('x');
    fireEvent.click(button);
    button = calc.getByText('0');
    fireEvent.click(button);
    button = calc.getByText('=');
    fireEvent.click(button);
    expect(displayScreen.innerHTML).toBe('0');
  });

  test('Subtraction', () => {
    const calc = render(<Calculator />);
    const displayScreen = calc.container.querySelector('.display');
    let button = calc.getByText('6');
    fireEvent.click(button);
    button = calc.getByText('-');
    fireEvent.click(button);
    button = calc.getByText('3');
    fireEvent.click(button);
    button = calc.getByText('=');
    fireEvent.click(button);
    expect(displayScreen.innerHTML).toBe('3');
  });
});

describe('Test home page component', () => {
  test('renders home page header', () => {
    render(<App />);
    const header = screen.getByText('Welcome to our Page!');
    expect(header).toBeInTheDocument();
  });
  test('renders home page p tag', () => {
    render(<App />);
    const paragraph = screen.getByText('Welcome Math Magician! You must be a math fanatic to be here. This website was built exactly for you! Be sure to check out the qoute of the day and enjoy the Calculator application!');
    expect(paragraph).toBeInTheDocument();
  });
});

describe('Check Navlinks', () => {
  test('check quote navigation link', () => {
    render(<App />);
    const navLink = screen.getByText('Quote');
    fireEvent.click(navLink);
    const paragraph = screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thrurson');
    expect(paragraph).toBeInTheDocument();
  });
});
