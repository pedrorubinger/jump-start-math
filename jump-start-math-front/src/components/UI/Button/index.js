import React from 'react';

import { StyledButton } from './styles';

const Button = ({ color, children, disabled, ...rest }) => {
  return (
    <StyledButton color={color} {...rest} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
