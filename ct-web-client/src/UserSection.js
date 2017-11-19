import React, { Component } from 'react';
import { Button, Segment, Menu, Card, Item } from 'semantic-ui-react';
import Register from './Register.js';

class UserSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      isRegister: false
    };

    this.handleAddNewUserClick = this.handleAddNewUserClick.bind(this);
    this.handleRegisterClose = this.handleRegisterClose.bind(this);
  }

  handleAddNewUserClick(event, {name}){
    this.setState({
      isRegister: !this.state.isRegister
    });
  };

  handleRegisterClose(){
    this.setState({
      isRegister: false
    });
  };

  render() {
    return (
      <Segment attached="bottom">
        <Menu secondary>
          <Menu.Item position="right">
            <Button onClick={this.handleAddNewUserClick}>Add New User</Button>
          </Menu.Item>
        </Menu>          
        <Register isUserTypeRadioVisible={false} isRegister={this.state.isRegister} handleRegisterClose={this.handleRegisterClose} userType="2" addNewUser={this.props.addNewUser} />
        <Card.Group>
          {this.props.userList.map((user, index) => {
            return <Card raised key={index}>
              <Card.Content>
                <Card.Header style={{
                  color: 'blue'
                }}>
                  {user.name}
                </Card.Header>
                <Card.Description>
                  <Item.Group as="Grid">
                    <Item>
                      <Item.Content>
                        <Item.Header>Mobile</Item.Header>
                        <Item.Meta>{user.mobile}</Item.Meta>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Content>
                        <Item.Header>Email</Item.Header>
                        <Item.Meta>{user.email}</Item.Meta>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Card.Description>
              </Card.Content>
              {/* <Card.Content extra>
                <div className='ui two buttons'>
                  <Button color='orange' inverted onClick={() => this.handleEditAdmin(user, index)}>Edit</Button>
                  <Button color='red' inverted onClick={() => this.handleAdminDelete(index)}>Delete</Button>
                </div>
              </Card.Content> */}
            </Card>
          })}
        </Card.Group>        
      </Segment>
    );
  }
}

export default UserSection;