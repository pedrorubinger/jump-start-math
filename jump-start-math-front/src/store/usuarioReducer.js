const INITIAL_STATE ={
    usuarioLogado: 1,
    usuarioNome: "ata",
    usuarioTipo: 1,
    // 0 = Aluno, 1 = professor
    usuarioId: 123
}

export default function usuarioReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOGIN':
            return {...state, usuarioLogado: 1, usuarioNome: action.usuarioNome, usuarioTipo: action.usuarioTipo, usuarioId: action.usuarioId}
        case 'LOGOUT':
            return {...state, usuarioLogado: 0, usuarioNome: null, usuarioTipo: 0, usuarioId: null}
        default:
            return state;    
    }
}