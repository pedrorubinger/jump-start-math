import react from 'react'
import Header from '../../components/UI/Header'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default function Prof(match){
    
    const userLogado = useSelector(state => state.usuario.usuarioLogado);

    return(
        <>
            <Header/>
            {
                userLogado < 0 ? <Redirect to="/"/> : null
            }
        </>
    )
}