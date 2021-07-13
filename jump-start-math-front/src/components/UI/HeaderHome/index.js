import React,{useEffect, useState} from 'react';
import { Container, NavList, StyledLink, Home } from './styles';

function HeaderHome() {
  
  const [logCadast, setLogCadast] = useState(true);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [tipoUser, setTipoUser] = useState(0);

  console.log('oi');
  console.log(logCadast);
  
  function autenticar(){

  }

  return (
    <Container>
      <nav>
        <Home to="/">Home</Home>
        <NavList>
          <StyledLink to="/content">Conteudo</StyledLink>
          <StyledLink to="/technologies">O Projeto</StyledLink>
          <StyledLink to="/team">Equipe</StyledLink>
          <StyledLink to="/contact">Contato</StyledLink>
          <StyledLink to="" data-bs-toggle="modal" data-bs-target="#exampleModal">Entrar/Cadastrar</StyledLink>
        </NavList>
      </nav>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          {

            logCadast ?

            (
              <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Cadastro</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="form-signin mx-auto">
                  <div className="form-label-group my-2">
                      <input onChange={(e)=> setNome(e.target.value)} id="inputNome" className="form-control" placeholder="Nome"></input>
                  </div>
                  <div className="form-label-group my-2">
                      <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Email"></input>
                  </div>
                  <div className="form-label-group my-2">
                      <input onChange={(e)=> setSenha(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Senha"></input>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block loginBtn my-2" onClick={autenticar} type="button">Entrar</button>
                  <div className="text-center">
                      <p>Não possui Login?<button onClick={() => setLogCadast(false)} className="btn btn-link">Cadastre-se aqui!</button></p>
                  </div>
                </form>
              </div>
            </div>
            )

            :

            <h1>oie</h1>
            
          }
        </div>
      </div>
    </Container>

  );
}

export default HeaderHome;