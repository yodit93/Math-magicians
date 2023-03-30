import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Input from '../components/Input';

describe('Input componenet', () => {
  let btn = '';
  const onHandleClick = (e) => {
    btn = e.target.textContent;
  };
  test('should render the Input component', () => {
    const tree = renderer.create(<Input onHandleClick={onHandleClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have button with the text "AC" ', () => {
    render(<Input onHandleClick={onHandleClick} />);
    const buttonElement = screen.getByText(/AC/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should have more than 10 buttons', () => {
    render(<Input onHandleClick={onHandleClick} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBeGreaterThan(10);
  });

  test('btn should equal to "Ac"', () => {
    render(<Input onHandleClick={onHandleClick} />);
    const buttonElement = screen.getByText('AC');
    fireEvent.click(buttonElement);
    expect(btn).toBe('AC');
  });

  test('btn should equal to "1"', () => {
    render(<Input onHandleClick={onHandleClick} />);
    const buttonElement = screen.getByText('1');
    fireEvent.click(buttonElement);
    expect(btn).toBe('1');
  });

  test('btn should equal to "%"', () => {
    render(<Input onHandleClick={onHandleClick} />);
    const buttonElement = screen.getByText('%');
    fireEvent.click(buttonElement);
    expect(btn).toBe('%');
  });

  test('btn should equal to "x"', () => {
    render(<Input onHandleClick={onHandleClick} />);
    const buttonElement = screen.getByText('x');
    fireEvent.click(buttonElement);
    expect(btn).toBe('x');
  });
});
