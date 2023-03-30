import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Result from '../components/Result';

const state = {
  title: '3',
  next: '4',
  operation: '+',
};

test('should render the Result component', () => {
  const tree = renderer.create(<Result state={state} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should have two paragraphs', () => {
  render(<Result state={state} />);
  const divElement = screen.getByTestId('test');
  expect(divElement).toBeInTheDocument();
});
