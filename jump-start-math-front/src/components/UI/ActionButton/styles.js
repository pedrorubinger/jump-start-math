import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ textColor }) => textColor || '#FFF'};
  background-color: ${({ bgColor }) => bgColor || '#423e3e'};
  border-radius: 5px;
  border: ${({ border }) => border || 'none'};
  padding: ${({ padding }) => padding || '8px'};
`;
