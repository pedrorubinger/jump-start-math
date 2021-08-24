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

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`


export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem 0 0.6rem;
  height: max-content;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`