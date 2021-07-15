import React,{useEffect, useState} from 'react';
import { Container, NavList, StyledLink, Home } from './styles';
import "../HeaderHome/HeaderHome.css"

function HeaderHome() {
  
  const [logCadast, setLogCadast] = useState(true);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [tipoUser, setTipoUser] = useState(0);
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");

  console.log('oi');
  console.log(logCadast);
  
  function toggleLogin(e){
    e.preventDefault();
    setLogCadast(true);
  }
  function toggleCadastro(e){
    e.preventDefault();
    setLogCadast(false);
  }

  function autenticar(){

  }

  function cadastrar(){

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
                  <h5 className="modal-title" id="exampleModalLabel">Entrar</h5>
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
                    <button className="btn btn-lg btn-primary btn-block loginBtn my-2" onClick={()=>cadastrar} type="button">Entrar</button>
                    <div className="text-center">
                        <p>Não possui Login?<button onClick={(e) => toggleCadastro(e)} className="btn btn-link">Cadastre-se aqui!</button></p>
                    </div>
                  </form>
                </div>
              </div>
            )

            :

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
                    <div className="container d-flex mt-3">
                      <h6>Cadastrar como:</h6>
                    </div>
                    <div className="form-check ms-1">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" for="flexRadioDefault1">
                        Professor
                      </label>
                    </div>
                    <div className="form-check ms-1">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                      <label className="form-check-label" for="flexRadioDefault2">
                        Aluno
                      </label>
                    </div>
                    <div className="mt-3">
                      <div className="form-label-group my-2">
                        <label className="form-label">Qual o nome do seu primeiro animal de estimação?</label>
                        <input onChange={(e)=> setQ1(e.target.value)} id="inputQ1" className="form-control"></input>
                      </div><div className="form-label-group my-2">
                        <label className="form-label">Qual o nome do sua primeira escola?</label>
                        <input onChange={(e)=> setQ2(e.target.value)} id="inputQ2" className="form-control"></input>
                      </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block loginBtn my-2" onClick={()=>cadastrar} type="button">Cadastrar</button>
                    <div className="text-center">
                        <p>Já possui Login?<button onClick={(e) => toggleLogin(e)} className="btn btn-link">Entre aqui!</button></p>
                    </div>
                  </form>
                </div>
              </div>
            )
            
          }
        </div>
      </div>
    </Container>

  );
}

export default HeaderHome;