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
  cursor: pointer;
  transition: .5s;

  &:hover {
    background-color: #1e2228;
  }
`;
