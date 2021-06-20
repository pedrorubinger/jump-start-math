import React from 'react';

import { StyledInput, StyledTextArea } from './styles';

const Input = ({
  value = '',
  type = 'text',
  ...rest
}) => {
  if (type === 'select') {
    /** TO DO: Implement select input... */
  }

  if (type === 'textarea') {
    return <StyledTextArea value={value} {...rest} />;
  }

  return (
    <StyledInput value={value} {...rest} />
  );
};

export default Input;
