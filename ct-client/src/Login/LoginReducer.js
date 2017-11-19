const LoginReducer = (state = {}, action) => {
  console.log('LoginReducer called');
  switch (action.type) {
    case 'LOG_IN_USER':
      let newState = Object.assign({}, state);
      newState.loggedInUser = action.loggedInUser;
      return newState;
    case 'LOG_OUT_USER':
      let newState2 = Object.assign({}, state);
      newState2.loggedInUser = undefined;
      return newState2;      
    default:
      return state
  }
}

export default LoginReducer