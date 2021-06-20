import React from 'react';

import { StyledFormGroup } from './styles';

const FormGroup = ({ children, ...rest }) => {
  return (
    <StyledFormGroup {...rest}>
      {children}
    </StyledFormGroup>
  )
};

export default FormGroup;
