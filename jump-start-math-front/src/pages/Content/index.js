import React from 'react'
import Markdown from '../../components/UI/Markdown';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';

const Content = () => {
  return (
    <>
      <Header/>
      <Markdown fileName="content"/>
      <Footer/>
    </>
  );
}

export default Content;