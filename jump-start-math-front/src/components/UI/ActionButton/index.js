import React from 'react';

import { Button } from './styles';

const ActionButton = ({ textColor, bgColor, children, ...rest }) => {
  return (
    <Button
      textColor={textColor}
      bgColor={bgColor}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
