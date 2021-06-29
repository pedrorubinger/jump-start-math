import React from 'react';

import { Container } from './styles';

function Titles({titleName}) {
  return (
    <Container>
      <h1>{titleName}</h1>
    </Container>  
  );
}

export default Titles;