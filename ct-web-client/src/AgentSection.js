import React, { Component } from 'react';
import { Button, Segment, Menu, Card, Item } from 'semantic-ui-react';
import Register from './Register.js';
import { Route } from 'react-router-dom';

class AgentSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      isRegister: false
    };

    this.handleAddNewAgentClick = this.handleAddNewAgentClick.bind(this);
    this.handleRegisterClose = this.handleRegisterClose.bind(this);
  }

  handleAddNewAgentClick(event, {name}){
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
            <Button onClick={this.handleAddNewAgentClick}>Add New Agent</Button>
          </Menu.Item>
        </Menu>           
        <Register isUserTypeRadioVisible={false} isRegister={this.state.isRegister} handleRegisterClose={this.handleRegisterClose} userType="3" addNewUser={this.props.addNewAgent} />
        <Route render={({ history}) => (
          <Card.Group>
            {this.props.agentList.map((agent, index) => {
              return (
                <Card raised key={index} style={{cursor: 'pointer'}} onClick={() => history.push('/SuperAdmin/Agents/' + agent.id)}>
                  <Card.Content>
                    <Card.Header style={{
                      color: 'blue'
                    }}>
                      {agent.name}
                    </Card.Header>
                    <Card.Description>
                      <Item.Group as="Grid">
                        <Item>
                          <Item.Content>
                            <Item.Header>Mobile</Item.Header>
                            <Item.Meta>{agent.mobile}</Item.Meta>
                          </Item.Content>
                        </Item>
                        <Item>
                          <Item.Content>
                            <Item.Header>Email</Item.Header>
                            <Item.Meta>{agent.email}</Item.Meta>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Card.Description>
                  </Card.Content>
                  {/* <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button color='orange' inverted onClick={() => this.handleEditAdmin(agent, index)}>Edit</Button>
                      <Button color='red' inverted onClick={() => this.handleAdminDelete(index)}>Delete</Button>
                    </div>
                  </Card.Content> */}
                </Card>
              )
            })}
          </Card.Group>        
        )} />
      </Segment>
    );
  }
}

export default AgentSection;