import styled from 'styled-components';

export const Container = styled.div`
  background: #282C34;
  padding: 0 50px;
  height: 200px;
  display: flex;
  align-items: center;

  p {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    width: 50%;
    margin: 0 !important;
  }
`;

export const Rights = styled.div`
  background: #FFF;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    font-family: 'Roboto', sans-serif;
    margin: 0 !important;
  }
`;