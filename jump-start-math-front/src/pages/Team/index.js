import React from 'react'
import Markdown from '../../components/UI/Markdown';
import Header from '../../components/UI/Header';
import Titles from '../../components/UI/Titles';
import Footer from '../../components/UI/Footer';

import {Container} from './styles';

const Team = () => {
  return (
    <>
      <Header/>
      <Titles titleName={'A Equipe'} />
      <Container>
      <Markdown fileName="team"/>
      </Container>  
      <Footer/>
    </>
  );
}

export default Team;