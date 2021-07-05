import styled from 'styled-components';


export const ContactContainer = styled.div`
  min-height: 100vh;
  background-color: #f4f4f4;
`;

export const ContactHeader = styled.div`
  background-color: #282c34;
  color: #FFF;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactHeaderTitle = styled.h3`
  font-size: 45px;
  text-shadow: 1px 1px 0px #eae8e8;
  margin: 0;
`;

export const ContactHeaderText = styled.p`
  font-size: 16px;
  font-weight: lighter;
  margin: 0;
  margin-top: 15px;
`;

export const ContactContent = styled.div`
  margin-top: 20px;
  padding: auto 30px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
