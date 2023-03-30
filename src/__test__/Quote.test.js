import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Quote componenet', () => {
  test('should render the Quote component', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
