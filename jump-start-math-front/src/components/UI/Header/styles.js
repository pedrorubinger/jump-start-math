import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 50px;

  nav {
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Home = styled(Link)`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;  
  font-weight: bold;
  color: ${props => (props.iscurrent ? '#0D0E14' : '#282C34')};
  margin-right: 20px;

  :hover {
    text-decoration: underline;
    color: ${props => (props.iscurrent ? '#0D0E14' : '#0D0E14')};
  }
`;

export const NavList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const StyledLink = styled(Link)`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: normal;
  color: ${props => (props.iscurrent ? '#0D0E14' : '#282C34')};
  margin-right: 20px;

  :hover {
    text-decoration: underline;
    color: ${props => (props.iscurrent ? '#0D0E14' : '#0D0E14')};
  }
`;

