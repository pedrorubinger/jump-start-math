import React from 'react'
import Markdown from '../../components/UI/Markdown';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';

const Team = () => {
  return (
    <>
      <Header/>
      <Markdown fileName="team"/>
      <Footer/>
    </>
  );
}

export default Team;