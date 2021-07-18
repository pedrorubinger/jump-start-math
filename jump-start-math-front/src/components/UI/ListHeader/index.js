import React from 'react';

import { AddButton, Container, TitleContainer, Message, Title } from './styles';

const ListHeader = ({
  length = 0,
  title = '',
  emptyMsg = '',
  msg = '',
  addButton,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {!length ? <Message>{emptyMsg}</Message> : <Message>{msg}</Message>}
      </TitleContainer>
      {!!addButton?.visible && (
        <AddButton title={addButton.title || ''} onClick={addButton.onClick}>
          {addButton.value}
        </AddButton>
      )}
    </Container>
  );
};

export default ListHeader;
