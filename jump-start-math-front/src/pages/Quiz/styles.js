import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  max-width: 45%;
  text-align: center;
`;

export const Error = styled.p`
  margin: 0.4rem 0 0;
  font-size: 0.8rem;
  width: 100%;
  text-align: left;
  color: red;
`;