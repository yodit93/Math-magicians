import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator componenet', () => {
  test('should render the calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have div with the text "Let&apos;s do some Math" ', () => {
    render(<Calculator />);
    const divElement = screen.getByText("Let's do some Math");
    expect(divElement).toBeInTheDocument();
  });
});
