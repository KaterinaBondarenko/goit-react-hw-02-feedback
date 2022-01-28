import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      {options.map((item, index) => (
        <Button type="button" key={index} name={item} onClick={onLeaveFeedback}>
          {item}
        </Button>
      ))}
    </Container>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
