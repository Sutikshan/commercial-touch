import React, {Component} from 'react';
import { Menu, Button, Segment, Card, Item, Modal, Icon } from 'semantic-ui-react';

class SuperAdminHome extends Component {   
  render() {
    return (
      <Segment>
        <Card raised centered >
          <Card.Content>
            <Card.Header style={{
              color: 'blue'
            }}>
              {this.props.superAdmin.name}
            </Card.Header>
            <Card.Description>
              <Item.Group as="Grid">
                <Item>
                  <Item.Content>
                    <Item.Header>Mobile</Item.Header>
                    <Item.Meta>{this.props.superAdmin.mobile}</Item.Meta>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Header>Email</Item.Header>
                    <Item.Meta>{this.props.superAdmin.email}</Item.Meta>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button color='orange' inverted>Edit</Button>
              <Button color='red' inverted>Reset Password</Button>
            </div>
          </Card.Content>
        </Card>    
      </Segment>  
    );
  }
}
export default SuperAdminHome;
