import { superAdminInitialState } from "./SuperAdminConstants";
import * as ActionTypes from "./SuperAdminActionTypes";

const SuperAdminReducer = (state = superAdminInitialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ADMIN: {
      const newState = {
        ...state,
        adminList: [ ...state.adminList ]
      };
      newState.adminList.push(action.newAdmin);
        
      return newState;    
    }
    
    case ActionTypes.SET_ADMIN_LIST: {
      const newState =  { ...state, adminList: action.adminList };
      return newState;
    }

    default:
      return state
  }
}

export default SuperAdminReducer