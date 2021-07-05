import React from 'react';
import { Container, NavList, StyledLink, Home } from './styles';

function HeaderHome() {
  return (
    <Container>
      <nav>
        <Home to="/">Home</Home>
        <NavList>
          <StyledLink to="/content">Conteudo</StyledLink>
          <StyledLink to="/technologies">O Projeto</StyledLink>
          <StyledLink to="/team">Equipe</StyledLink>
          <StyledLink to="/contact">Contato</StyledLink>
        </NavList>
      </nav>
    </Container>
  );
}

export default HeaderHome;