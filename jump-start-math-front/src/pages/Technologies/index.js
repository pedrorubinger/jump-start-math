import React from 'react'
import Markdown from '../../components/UI/Markdown';
import Header from '../../components/UI/Header';
import Titles from '../../components/UI/Titles';
import Footer from '../../components/UI/Footer';

const Technologies = () => {
  return (
    <>
      <Header/>
      <Titles titleName={'As Tecnologias'} />
      <Markdown fileName="technologies"/>
      <Footer/>
    </>
  );
}

export default Technologies;