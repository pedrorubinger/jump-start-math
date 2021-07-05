import React from 'react'
import Markdown from '../../components/UI/Markdown';
import Header from '../../components/UI/Header';
import Titles from '../../components/UI/Titles';
import Footer from '../../components/UI/Footer';

import {Container} from './styles';

const Technologies = () => {
  return (
    <>
      <Header/>
      <Titles titleName={'As Tecnologias'} />
      <Container>
       <Markdown fileName="technologies"/>
      </Container>  
      <Footer/>
    </>
  );
}

export default Technologies;