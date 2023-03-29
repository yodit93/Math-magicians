import calculate from '../calculate';

const object = {
  total: null,
  next: null,
  operation: null,
};

describe('testing calculate function', () => {
  it('AC button is clicked, the result should be cleared', () => {
    const buttonName = 'AC';
    const obj = { ...object, next: '5' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(object);
  });

  it('next and total is 0, then it should return an empty object', () => {
    const buttonName = '0';
    const obj = { ...object, next: '0', total: '0' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({});
  });

  it('there is no operation, update next and clear the value', () => {
    const buttonName = '3';
    const obj = { ...object };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ next: '3', total: null });
  });

  it('when the button is . ', () => {
    const buttonName = '.';
    const obj = { ...object, next: '0.985' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ ...obj });
  });

  it('when the button is = ', () => {
    const buttonName = '=';
    const obj = { total: '1010', next: '0101', operation: '+' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ ...object, total: '1111' });
  });

  it('when user puts an operation after pressing = ', () => {
    const buttonName = '-';
    const obj = { ...object, total: '50' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ ...object, total: '50', operation: '-' });
  });
});
