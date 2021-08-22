import React, { useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import '../HeaderHome/HeaderHome.css';
import { logoutUser, setUser } from '../../../store/user';
import { registerUser, updatePassword, signIn } from '../../../services/requests/users';
import { Container, NavList, StyledLink, Home } from './styles';
import Toast from '../../UI/Toast'
import signInSchema from '../../Forms/SignInForm/schema';
import SignInForm from '../../Forms/SignInForm';

function HeaderHome() {
  const signInFormRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [logCadast, setLogCadast] = useState(true);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [tipoUser, setTipoUser] = useState();
  const [q1, setQ1] = useState("");
  
  function toggleLogin(e){
    e.preventDefault();
    setLogCadast(true);
  }
  function toggleCadastro(e){
    e.preventDefault();
    setLogCadast(false);
  }

  const logout = () => {
    storage.removeItem('JumpStartMath');
    localStorage.clear();
    dispatch(logoutUser());
  };

  const trocarTipo = (e) => {
    e.target.id === "flexRadioProfessor" ? setTipoUser(true) : setTipoUser(false);
  }

  async function trocarSenha() {
    try{

      const data = {
        email: email,
        password: senha,
        question: "Qual o nome do seu primeiro animal de estimação?",
        answer: q1
      }

      if(email && senha && q1.trim() !== ""){
        console.log(data);
        await updatePassword(data);
        // console.log(response);
        Toast().fire({
          icon: 'success',
          title: 'Senha alterada com sucesso.'
        });
      }else{
        Toast().fire({
          icon: 'error',
          title: 'Preencha todos os campos.'
        });
      }
    }catch(error){
      Toast().fire({
        icon: 'error',
        title: error.data?.error
      });
    }
  }

  async function cadastrar(){
    try{
      const data = {
        name: nome, 
        email: email, 
        password: senha, 
        teacher: tipoUser, 
        question: "Qual o nome do seu primeiro animal de estimação?", 
        answer: q1
      };
      
      if(nome && email && senha && tipoUser !== undefined && q1.trim() !== ""){
        await registerUser(data);
        Toast().fire({
          icon: 'success',
          title: 'Cadastrado com sucesso.'
        });
        
      }else{
        Toast().fire({
          icon: 'error',
          title: 'Preencha todos os campos.'
        });
      }
    }catch (error){
      Toast().fire({
        icon: 'error',
        title: error.data?.error
      });
    }
  }

  const getUserRoutes = () => {
    if (!user) {
      return null;
    }

    switch (user?.role) {
      case 'teacher':
        return (
          <>
            {/* Aqui entram todas as rotas do professor... */}
            <StyledLink to="/teacher/classes">Turmas</StyledLink>
          </>
        );
      case 'student':
        return (
          <>
            {/* Aqui entram todas as rotas do aluno... */}
            <StyledLink to="/student/class-sign-in">Matricular-se</StyledLink>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <nav>
        <Home to="/">Home</Home>
        <NavList>
          <StyledLink to="/content">Conteudo</StyledLink>
          <StyledLink to="/technologies">O Projeto</StyledLink>
          <StyledLink to="/team">Equipe</StyledLink>
          <StyledLink to="/contact">Contato</StyledLink>
          {getUserRoutes()}
          {
            user
            ? <StyledLink to="/" onClick={logout} >
                Logout
                {/* {`${user?.name?.split(' ')?.[0] || 'Username'} - Logout`} */}
              </StyledLink>
            : <StyledLink
                to=""
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Entrar/Cadastrar
              </StyledLink>
          }
        </NavList>
      </nav>
      
      <div className="modal fade" id="recPassWordModal" tabIndex="-1" aria-labelledby="recPassWordModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Recuperação de Senha</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-label-group my-2">
                <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Email"></input>
              </div>
              <div className="form-label-group my-2">
                <input onChange={(e)=> setSenha(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Nova Senha"></input>
              </div>
              <div className="mt-3">
                <div className="form-label-group my-2">
                  <label className="form-label">Qual o nome do seu primeiro animal de estimação?</label>
                  <input onChange={(e)=> setQ1(e.target.value)} id="inputQ1" className="form-control"></input>
                </div>
              </div>

              <button onClick={()=>trocarSenha()} type="button" className="btn btn-primary">Trocar Senha</button>
            </div>
          </div>
        </div>
      </div>
      
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
                  <SignInForm
                    signInFormRef={signInFormRef}
                    isSubmitting={isSubmitting}
                    onSubmit={async (values) => {
                      setIsSubmitting(true);

                      try {
                        await signInSchema.validate(values, { abortEarly: false });

                        const response = await signIn({
                          email: values.email,
                          password: values.password,
                        });

                        dispatch(setUser({
                          ...response.data.user,
                          role: response.data.user?.teacher
                            ? 'teacher'
                            : 'student',
                        }));
                        localStorage.setItem('token', response.data.token);
                        window?.location?.reload();
                      } catch (err) {
                        const validationErrors = {};

                        if (err?.data?.error === 'User not found') {
                          setIsSubmitting(false);
                          return Swal.fire({
                            title: 'Usuário não encontrado!',
                            text: 'Este usuário não existe. Clique em registrar-se.',
                            icon: 'warning',
                          });
                        }

                        if (err instanceof Yup.ValidationError) {
                          err.inner.forEach(error => {
                            validationErrors[error.path] = error.message;
                          });
                  
                          signInFormRef?.current?.setErrors(validationErrors);
                        } else {
                          Swal.fire({
                            title: 'Erro ao logar!',
                            text:
                              'Desculpe, um erro aconteceu ao fazer login. Por favor, tente novamente mais tarde ou contate-nos.',
                            icon: 'error',
                          });
                        }
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  />

                  <div className="text-center">
                    <p>Esqueceu sua senha?<span data-bs-target="#recPassWordModal" data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-link">Recuperar senha.</span></p>
                  </div>
                  <div className="text-center">
                    <p>Não possui uma conta?<button onClick={(e) => toggleCadastro(e)} className="btn btn-link">Cadastre-se aqui!</button></p>
                  </div>
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
                      <input className="form-check-input" type="radio" name="flexRadio" id="flexRadioProfessor" onChange={trocarTipo}/>
                      <label className="form-check-label" htmlFor="flexRadioProfessor">
                        Professor
                      </label>
                    </div>
                    <div className="form-check ms-1">
                      <input className="form-check-input" type="radio" name="flexRadio" id="flexRadioAluno" onChange={trocarTipo}/>
                      <label className="form-check-label" htmlFor="flexRadioAluno">
                        Aluno
                      </label>
                    </div>
                    <div className="mt-3">
                      <div className="form-label-group my-2">
                        <label className="form-label">Qual o nome do seu primeiro animal de estimação?</label>
                        <input onChange={(e)=> setQ1(e.target.value)} id="inputQ1" className="form-control"></input>
                      </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block loginBtn my-2" onClick={()=>cadastrar()} type="button">Cadastrar</button>
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