import PropTypes from 'prop-types';

const Result = ({ state }) => {
  const [total, next, operation] = [state.total, state.next, state.operation];
  return (
    <div className="result-cont">
      <span className="result">
        {total}
        {' '}
        {operation}
        {' '}
        {next}
      </span>
    </div>
  );
};

Result.propTypes = {
  state: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Result;
