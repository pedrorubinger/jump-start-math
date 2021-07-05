import React from 'react'
import Markdown from '../../components/UI/Markdown';
import Titles from '../../components/UI/Titles';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';

import { Container } from './styles';

const Content = () => {
  return (
    <>
      <Header/>
      <Titles titleName={'Conteudo'} />
      <Container>
        <Markdown fileName="content"/>
      </Container>
      <Footer/>
    </>
  );
}

export default Content;