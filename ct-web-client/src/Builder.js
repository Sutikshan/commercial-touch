import React, {Component} from 'react';
import {Button, Modal, Form, Icon, Input} from 'semantic-ui-react';
import {Route} from 'react-router-dom';
class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  };
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <Modal open={this.props.isAddBuilder} onClose={this.props.handleAddBuilderClose}>
        <Modal.Header>Add New Builder</Modal.Header>
        <Modal.Content style={{
          fontSize: "1.5rem"
        }}>
          <Form>
            <Form.Field required error={this.state.username === ""}>
              <label>Username</label>
              <Input name="username" type="text" placeholder='user name' value={this.state.username} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.password === ""}>
              <label>Password</label>
              <Input name="password" type="password" placeholder='password' value={this.state.password} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.confirmPassword === "" || this.state.password !== this.state.confirmPassword}>
              <label>confirm password</label>
              <Input name="confirmPassword" type="password" placeholder='confirm password' value={this.state.confirmPassword} onChange={this.handleInputChange}/>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' inverted onClick={this.props.handleAddBuilderClose}>
            <Icon name='remove'/>
            Cancel
          </Button>
          <Route render={({history}) => (
            <Button color='green' inverted>
              <Icon name='add'/>
              Add
            </Button>
          )}/>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default Builder;
