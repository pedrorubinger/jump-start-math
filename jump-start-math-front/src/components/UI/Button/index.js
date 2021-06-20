import React from 'react';

import { StyledButton } from './styles';

const Button = ({ color, children, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
