import React, { Component } from 'react';
import { Modal, Icon, Button, Form, Input } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Axios from 'axios'
import { connect } from 'react-redux'
import { logInUser } from './actions'

class SignIn extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleInputChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLoginClick(history){
    var self = this;
    Axios.post("http://localhost:8000/oapi/v1/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        console.log(response);
        self.props.dispatch(logInUser(response.data.user));
        history.push('/SuperAdmin');
      })
      .catch(function (error) {
        console.log("error - ");
      });
  };

  render() {
    return (
        <Modal open={this.props.isModalOpen} onClose={this.props.onModalClose}>
          <Modal.Header>Login</Modal.Header>
          <Modal.Content style={{fontSize: "1.5rem"}}>
            <Form>
              <Form.Field required error={this.state.email === ""}>
                <label>Username</label>
                <Input name="email" type="email" placeholder='email' value={this.state.email} onChange={this.handleInputChange} />
              </Form.Field>
              <Form.Field required error={this.state.password === ""}>
                <label>Password</label>
                <Input name="password" type="password" placeholder='Password' value={this.state.password} onChange={this.handleInputChange} />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' inverted onClick={this.props.onModalClose}>
              <Icon name='remove' /> Cancel
            </Button>
            <Route render={({ history}) => (
              <Button color='green' inverted disabled={!this.state.email || !this.state.password} onClick={() => this.handleLoginClick(history)}>
                <Icon name='checkmark' /> Login
              </Button>
            )} />
          </Modal.Actions>
        </Modal>
    );
  }
}
SignIn = connect()(SignIn);
export default SignIn;
