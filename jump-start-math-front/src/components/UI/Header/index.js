import React from 'react';
import { Container, NavList, StyledLink, Home } from './styles';

function Header() {
  return (
    <Container>
      <nav>
        <Home to="/">Home</Home>
        <NavList>
          <StyledLink to="/content">Conteudo</StyledLink>
          <StyledLink to="">O Projeto</StyledLink>
          <StyledLink to="">Equipe</StyledLink>
          <StyledLink to="">Contato</StyledLink>
        </NavList>
      </nav>
    </Container>
  );
}

export default Header;