import styled from 'styled-components';
import background from '../../../assets/title-bg.png'

export const Container = styled.div`
  background-color: #282C34;
  background-image: url(${background});
  background-repeat: no-repeat;
  height: 200px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-weight: bold;
    font-size: 64px;
  }
`;
