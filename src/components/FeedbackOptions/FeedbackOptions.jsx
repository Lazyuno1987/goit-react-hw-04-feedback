import { List, Item, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
 
  return (
    <List>
      {option.map(el => {
        return (
          <Item key={nanoid()}>
            <Button type="button" onClick={() => onLeaveFeedback(el)}>
              {el}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
