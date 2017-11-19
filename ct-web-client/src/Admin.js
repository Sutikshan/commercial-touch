import React, {Component} from 'react';
import {Button, Modal, Form, Icon, Input} from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import {regEmail} from './Constants.js'
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: JSON.parse(JSON.stringify(this.props.adminObj))
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddAdmin = this.handleAddAdmin.bind(this);
    this.handleEditAdmin = this.handleEditAdmin.bind(this);
  };
  handleInputChange(event) {
    let admin = this.state.admin;
    admin[event.target.name] = event.target.value;
    this.setState({admin});
  };
  handleAddAdmin(event) {
    this.props.addNewAdmin(this.state.admin);
    this.props.handleAddAdminClose();
    this.setState({
      admin: {
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
      }
    });
  };
  handleEditAdmin() {
    this.props.updateAdmin(this.state.admin, this.props.selectedAdminIndex);
    this.props.handleAddAdminClose();
  }
  render() {
    return (
      <Modal open={this.props.isAddAdmin} onClose={this.props.handleAddAdminClose}>
        <Modal.Header>
          {this.props.isEditAdmin ? 'Update Admin' : "Add New Admin"}
        </Modal.Header>
        <Modal.Content style={{
          fontSize: "1.5rem"
        }}>
          <Form>
            <Form.Field required error={this.state.admin.name === ""}>
              <label>Name</label>
              <Input name="name" type="text" placeholder='name' value={this.state.admin.name} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.admin.email === "" || !regEmail.test(this.state.admin.email)}>
              <label>Email</label>
              <Input name="email" type="email" placeholder='email' value={this.state.admin.email} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.admin.mobile === ""}>
              <label>Mobile number</label>
              <Input name="mobile" type="number" placeholder='mobile number' value={this.state.admin.mobile} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.admin.password === ""}>
              <label>Password</label>
              <Input name="password" type="password" placeholder='password' value={this.state.admin.password} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.admin.confirmPassword === "" || this.state.admin.password !== this.state.admin.confirmPassword}>
              <label>confirm password</label>
              <Input name="confirmPassword" type="password" placeholder='confirm password' value={this.state.admin.confirmPassword} onChange={this.handleInputChange}/>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' inverted onClick={this.props.handleAddAdminClose}>
            <Icon name='remove'/>
            Cancel
          </Button>
          <Route render={({history}) => (
            <Button color='green' inverted onClick={this.props.isEditAdmin ? this.handleEditAdmin : this.handleAddAdmin}>
              <Icon name={this.props.isEditAdmin ? 'edit' : 'add'}/>
              {this.props.isEditAdmin ? 'Edit' : 'Add'}
            </Button>
          )}/>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default Admin;
