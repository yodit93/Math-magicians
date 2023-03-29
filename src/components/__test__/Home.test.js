import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

test('should render the home component', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should have two paragraphs', () => {
  render(<Home />);
  const headingElement = screen.getByText(/Welcome to our page!/i);
  expect(headingElement).toBeInTheDocument();
});

test('should have two paragraphs', () => {
  render(<Home />);
  const headingElement = screen.queryByText(/link/i);
  expect(headingElement).not.toBeInTheDocument();
});
