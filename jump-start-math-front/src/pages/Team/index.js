import React from 'react'
import Markdown from '../../components/UI/Markdown';
import Header from '../../components/UI/Header';
import Titles from '../../components/UI/Titles';
import Footer from '../../components/UI/Footer';

const Team = () => {
  return (
    <>
      <Header/>
      <Titles titleName={'A Equipe'} />
      <Markdown fileName="team"/>
      <Footer/>
    </>
  );
}

export default Team;