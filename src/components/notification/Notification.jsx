import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Notifications.styled';

export default function Notification({ message }) {
  return <Title>{message}</Title>;
}

Notification.defaultProps = {
  message: 'No feedback given',
};

Notification.propTypes = {
  message: PropTypes.string,
};
