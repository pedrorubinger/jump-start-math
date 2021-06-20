import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ hasError }) => hasError ? '#ed4444' : '#e5e5e5'};
  box-shadow: 2px 1px 2px #eaeaea;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #a5b3ff;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ hasError }) => hasError ? '#ed4444' : '#e5e5e5'};
  resize: vertical;
  height: 90px;
  box-shadow: 2px 1px 2px #eaeaea;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #a5b3ff;
  }
`;

export const StyledError = styled.span`
  font-size: 12px;
  color: #ed4444;
  margin: 5px auto;
  text-align: left;
  width: 100%;
`;