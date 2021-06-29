import styled from 'styled-components';

/** TO DO: Implementar temas de cores, tamanhos, etc para padronizar...
 * colors: primary, success, danger, warning, ....
 * sizes: x-sm, sm, md, lg, x-lg, ...
*/

export const StyledButton = styled.button`
  background-color: ${({ color }) => color || '#282c34'};
  border-color: #282c34;
  color: #FFF;
  padding: 10px;
  font-size: 17px;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  transition: .5s;
  opacity: ${({ disabled }) => disabled ? .5 : 1};

  &:hover {
    background-color: ${({
      disabled,
      color,
      hoverColor = '#1e2228',
    }) => disabled ? color : hoverColor};
  }
`;
