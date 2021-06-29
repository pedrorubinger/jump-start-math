import React from 'react'
import Markdown from '../../components/UI/Markdown';
import Titles from '../../components/UI/Titles';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';

const Content = () => {
  return (
    <>
      <Header/>
      <Titles titleName={'Conteudo'} />
      <Markdown fileName="content"/>
      <Footer/>
    </>
  );
}

export default Content;