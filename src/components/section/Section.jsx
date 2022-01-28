import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

export default function Section({ titel, children }) {
  return (
    <SectionContainer>
      <h1>{titel}</h1>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  titel: PropTypes.string,
  children: PropTypes.node,
};
