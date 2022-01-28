import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/notification/Notification';
import { Container, ContainerStatistic, Text } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Container>
      <h2>Statistics</h2>
      {total ? (
        <ContainerStatistic>
          <Text>
            Good:
            <span> {good}</span>
          </Text>
          <Text>
            Neutral:
            <span> {neutral}</span>
          </Text>
          <Text>
            Bad:
            <span> {bad}</span>
          </Text>
          <Text>
            Total:
            <span> {total}</span>
          </Text>
          <Text>
            Positiv:
            <span> {positivePercentage}%</span>
          </Text>
        </ContainerStatistic>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};
