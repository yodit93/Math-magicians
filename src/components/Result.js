import PropTypes from 'prop-types';

const Result = ({ state }) => {
  const { total, next, operation } = state;
  return (
    <div className="result-cont" data-testid="test">
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
