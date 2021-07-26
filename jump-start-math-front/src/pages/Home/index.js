import React, { useState } from 'react';
import "./home.css";
import Markdown from '../../components/UI/Markdown';
import HeaderHome from '../../components/UI/HeaderHome';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

  const userLogado = useSelector(state => state.usuario.usuarioLogado);
  const userId = useSelector(state => state.usuario.usuarioId);
  const tipoUser = useSelector(state => state.usuario.usuarioTipo);

  console.log(typeof userLogado);

  return (
    <div className="divInicial">

      {
        userLogado > 0 ?   
        tipoUser > 1 ?
            <Redirect to={{
              pathname:`/professor/${userId}`
            }} />
          : <Redirect to={{
            pathname:`/aluno/${userId}`
          }} />
        : null
      }

      <HeaderHome />
      <div className="container d-flex align-items-center divCont">
        <div className="container">
          <h1 className="title">JumpStart</h1>
          <h2 className="slogan">A sua ferramenta para ensino rápido<br/>e prático em matemática</h2>
          <Link className="saibaMais" to='/content'>
            SAIBA MAIS
          </Link>
          <Markdown fileName="home"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
