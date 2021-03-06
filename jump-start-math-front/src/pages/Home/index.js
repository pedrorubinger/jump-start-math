import React from 'react';
import { Link } from 'react-router-dom';

import "./home.css";
import HeaderHome from '../../components/UI/HeaderHome';

const Home = () => {
  return (
    <div className="divInicial">

      <HeaderHome />
      <div className="container d-flex align-items-center divCont">
        <div className="container">
          <h1 className="title">JumpStart</h1>
          <h2 className="slogan">
            A sua ferramenta para ensino rápido<br/>e prático em matemática
          </h2>
          <Link className="saibaMais" to='/content'>
            SAIBA MAIS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
