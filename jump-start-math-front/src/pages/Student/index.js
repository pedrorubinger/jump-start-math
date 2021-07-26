import react from 'react'
import Header from '../../components/UI/Header'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Student(match){
    
    const userLogado = useSelector(state => state.usuario.usuarioLogado);
    const tipoUser = useSelector(state => state.usuario.usuarioTipo);

    return(
        <>
            <Header/>
            {
                userLogado < 0 ? <Redirect to="/"/> : null
            }
            {
                tipoUser > 1 ? <Redirect to="/"/> : null
            }
        </>
    )
}