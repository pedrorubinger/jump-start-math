import React from 'react';
import "./home.css";
import Markdown from '../../components/UI/Markdown';

const Home = () => {
  return (
    <div className="divInicial">
      <div className="container d-flex align-items-center divCont">
        <div className="container">
          <h1 className="title">JumpStart</h1>
          <h2 className="slogan">A sua ferramenta para ensino rápido<br/>e prático em matemática</h2>
          <button className="saibaMais">
            SAIBA MAIS
          </button>
          <Markdown fileName="home"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
