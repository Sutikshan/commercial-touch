import { combineReducers } from 'redux'
import HeaderReducer from '../Header/HeaderReducer'
import LoginReducer from '../Login/LoginReducer'
import SuperAdminReducer from '../SuperAdmin/SuperAdminReducer'

const ctApp = combineReducers({
  HeaderReducer,
  LoginReducer,
  SuperAdmin:  SuperAdminReducer,
})

export default ctApp