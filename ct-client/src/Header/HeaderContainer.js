import {connect} from 'react-redux'
import Header from './Header.jsx'
import {logOutUser} from './HeaderActions'
import {withRouter} from 'react-router'



const mapStateToProps = (state, ownProps) => {
  return {
    loggedInUser: state.LoginReducer.loggedInUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogOutClick: () => {
    dispatch(logOutUser());
    ownProps.history.push('/')
  },
  onAdminsClick: () => {    
    ownProps.history.push('/SuperAdmin/AdminList')
  },  
  onSuperAdminHomeClick: () => {
    ownProps.history.push('/SuperAdmin')
  },
  onBuildersClick: () => {
    ownProps.history.push('/SuperAdmin/Builders')
  },
  onAgentsClick: () => {
    ownProps.history.push('/SuperAdmin/Agents')
  }    
})

const HeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
export default HeaderContainer

