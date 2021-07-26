const types = {
  SET_USER: 'user/SET_USER',
  LOGOUT: 'user/LOGOUT',
};

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

export const setUser = (payload) => ({
  type: types.SET_USER,
  payload,
});

export const logoutUser = () => ({
  type: types.LOGOUT,
})

export default reducer;
