import { ListStat, ItemStat } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ListStat>
        <ItemStat>
          <p>Good: {good}</p>
        </ItemStat>
        <ItemStat>
          <p>Neutral: {neutral}</p>
        </ItemStat>
        <ItemStat>
          <p>Bad: {bad}</p>
        </ItemStat>
        <ItemStat>
          <p>Total: {total} </p>
        </ItemStat>
        <ItemStat>
          <p>Positive feedback: {positivePercentage}%</p>
        </ItemStat>
      </ListStat>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
