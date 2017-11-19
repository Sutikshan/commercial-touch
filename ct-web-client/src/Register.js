import React, {Component} from 'react';
import {Button, Modal, Form, Icon, Input} from 'semantic-ui-react';
import {regEmail} from './Constants.js';
function UserType(props){
  if(props.isUserTypeRadioVisible){
    return (    
      <Form.Group required inline>
      <label>User type</label>
      <Form.Radio name="type" label='Admin' value='1' checked={props.checkedValue === '1'} onChange={props.onChangeFunc} />
      <Form.Radio name="type" label='Buyer/Seller' value='2' checked={props.checkedValue === '2'} onChange={props.onChangeFunc} />
      <Form.Radio name="type" label='Agent/Broker' value='3' checked={props.checkedValue === '3'} onChange={props.onChangeFunc} />
      <Form.Radio name="type" label='Builder' value='4' checked={props.checkedValue === '4'} onChange={props.onChangeFunc} />
      </Form.Group>
    );
  }
  else{
    return null;
  }
};
function Header(props){
  switch(props.type){
    case '2':
      return <span>Register User</span>;
    case '3':
      return <span>Register Agent/Broker</span>;
    case '4':
      return <span>Register Builder</span>;
    default:
      return <span>Register user</span>;
  }     
};
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        type: this.props.userType            
        }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  };
  handleInputChange(event) {
    let user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  };

  handleUserTypeChange(event, {value}) {
    let user = this.state.user;
    user.type = value;
    this.setState({user});
  };

  handleRegister(event) {
    this.props.addNewUser(this.state.user);
    this.props.handleRegisterClose();
    this.setState({
      user: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      type: this.props.userType            
      }      
    });
  };  
  render() {
    return (
      <Modal open={this.props.isRegister} onClose={this.props.handleRegisterClose}>
        <Modal.Header>
          <Header type={this.state.user.type} />
        </Modal.Header>
        <Modal.Content style={{
          fontSize: "1.5rem"
        }}>
          <Form>
            <Form.Field required error={this.state.user.name === ""}>
              <label>Name</label>
              <Input name="name" type="text" placeholder='name' value={this.state.user.name} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.user.email === "" || !regEmail.test(this.state.user.email)}>
              <label>Email</label>
              <Input name="email" type="email" placeholder='email' value={this.state.user.email} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.user.mobile === ""}>
              <label>Mobile number</label>
              <Input name="mobile" type="number" placeholder='mobile number' value={this.state.user.mobile} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.user.password === ""}>
              <label>Password</label>
              <Input name="password" type="password" placeholder='password' value={this.state.user.password} onChange={this.handleInputChange}/>
            </Form.Field>
            <Form.Field required error={this.state.user.confirmPassword === "" || this.state.user.password !== this.state.user.confirmPassword}>
              <label>confirm password</label>
              <Input name="confirmPassword" type="password" placeholder='confirm password' value={this.state.user.confirmPassword} onChange={this.handleInputChange}/>
            </Form.Field>
            <UserType isUserTypeRadioVisible={this.props.isUserTypeRadioVisible} checkedValue={this.state.user.type} onChangeFunc={this.handleUserTypeChange} />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' inverted onClick={this.props.handleRegisterClose}>
            <Icon name='remove'/>
            Cancel
          </Button>
          <Button color='green' inverted onClick={this.handleRegister}>
            <Icon name='add' />
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default Register;
