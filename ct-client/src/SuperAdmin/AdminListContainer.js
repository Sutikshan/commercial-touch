import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AdminList from './AdminList.jsx';
import SuperAdminMiddleware from './SuperAdminMiddleware';

class AdminListContainer extends React.Component {
  componentDidMount() {
    this.props.getAdminList();
  }

  render() {
    return (<AdminList
      adminList={this.props.adminList}
      addNewAdminClick={this.props.addNewAdminClick}
    />);
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    adminList: state.SuperAdmin.adminList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewAdminClick: () => {
    ownProps.history.push('/SuperAdmin/RegisterAdmin')
  },
  getAdminList: () => dispatch(SuperAdminMiddleware.getAdminList())
});

AdminListContainer.propTypes = {
  adminList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    mobile: PropTypes.string,
  }))
};
AdminListContainer.defaultProps = {
  adminList: [],
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminListContainer);
