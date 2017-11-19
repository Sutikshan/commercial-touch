import {connect} from 'react-redux'
import AdminList from './AdminList.jsx'
import {withRouter} from 'react-router'

const mapStateToProps = (state, ownProps) => {
  return {
    // adminList: state.user.adminList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewAdminClick: () => {
    ownProps.history.push('/SuperAdmin/RegisterAdmin')
  }
})

const AdminListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminList))
export default AdminListContainer
