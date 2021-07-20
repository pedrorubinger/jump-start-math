const INITIAL_STATE ={
    usuarioLogado: 0,
    usuarioNome: "",
    usuarioTipo: 0,
}

export default function usuarioReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOGIN':
            return {...state, usuarioLogado: 1, usuarioNome: action.usuarioNome, usuarioTipo: action.usuarioTipo}
        case 'LOGOUT':
            return {...state, usuarioLogado: 0, usuarioNome: null, usuarioTipo: 0}
        default:
            return state;    
    }
}