const superAdminInitialState = {
    adminList: []
}

const SuperAdminReducer = (state = superAdminInitialState, action) => {
  console.log('SuperAdminReducer called');
  switch (action.type) {
    case 'ADD_NEW_ADMIN':
      let newState = Object.assign({}, state);
      newState.adminList.push(action.newAdmin);
      return newState;    
    default:
      return state
  }
}

export default SuperAdminReducer