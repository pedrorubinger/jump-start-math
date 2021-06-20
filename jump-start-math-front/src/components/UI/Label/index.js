import React from 'react';

import { StyledLabel, StyledSpan } from './styles';

const Label = ({ children, htmlFor, required, ...rest }) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...rest}>
      {children} {!!required ? <StyledSpan>*</StyledSpan> : ''}
    </StyledLabel>
  );
};

export default Label;
