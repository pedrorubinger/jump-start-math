import React from 'react';

import { Container } from './styles';
import Header from '../../components/UI/Header';
import Titles from '../../components/UI/Titles';
import Footer from '../../components/UI/Footer';

function Content() {
  return(
    <>
      <Header />
      <Titles titleName={'O Conteudo'} />
      <Container>
        
      </Container>
      <Footer />
    </>
  );
}

export default Content;