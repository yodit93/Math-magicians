import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const MockNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

test('should render the Navbar component', () => {
  const tree = renderer.create(<MockNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should include nav element', () => {
  render(<MockNavbar />);
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});
