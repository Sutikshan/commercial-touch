const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
      state.loggedInUser = action.loggedInUser;
      return state;
    default:
      return state
  }
}

export default user