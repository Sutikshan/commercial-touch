import React, {Component} from 'react';
import { Menu, Button, Segment, Card, Item, Modal, Icon } from 'semantic-ui-react';
import Admin from './Admin.js';
function getNewAdminObj() {
  return {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: ""    
  };
};
function AdminModal(props) {
  if (props.isAddAdmin) {
    return <Admin 
      adminObj={props.adminObj} 
      isAddAdmin={props.isAddAdmin} 
      isEditAdmin={props.isEditAdmin} 
      handleAddAdminClose={props.handleAddAdminClose} 
      addNewAdmin={props.addNewAdmin} 
      updateAdmin={props.updateAdmin}
      selectedAdminIndex={props.selectedAdminIndex}
    />
  } else {
    return null;
  }
}
class AdminSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddAdmin: false,
      isEditAdmin: false,
      isAdminDeleteModalVisible: false,
      indexOfAccToDelete: -1,
      selectedAdminIndex: -1,
      adminObj: getNewAdminObj()
    };
    this.handleAddNewAdminClick = this.handleAddNewAdminClick.bind(this);
    this.handleAddAdminClose = this.handleAddAdminClose.bind(this);
    this.handleAdminDelete = this.handleAdminDelete.bind(this);
    this.handleAdminDeleteClose = this.handleAdminDeleteClose.bind(this);
    this.handleEditAdmin = this.handleEditAdmin.bind(this);
  }
  handleAddNewAdminClick(event) {
    this.setState({
      isAddAdmin: !this.state.isAddAdmin,
      isEditAdmin: false,
      adminObj: getNewAdminObj()
    });
  };
  handleAddAdminClose(event) {
    this.setState({isAddAdmin: false});
  };
  handleAdminDelete(index) {
    this.setState({isAdminDeleteModalVisible: true, indexOfAccToDelete: index});
  };
  handleAdminDeleteClose(event) {
    this.setState({isAdminDeleteModalVisible: false, indexOfAccToDelete: -1});
  };
  handleEditAdmin(admin, index){
    this.setState({
      isAddAdmin: true,
      isEditAdmin: true,
      adminObj: admin,
      selectedAdminIndex: index
    });
  }
  render() {
    return (
      <Segment attached="bottom">
        <Menu secondary>
          <Menu.Item position="right">
            <Button onClick={this.handleAddNewAdminClick}>Add New Admin</Button>
          </Menu.Item>
        </Menu>
        <AdminModal 
          adminObj={this.state.adminObj} 
          isAddAdmin={this.state.isAddAdmin} 
          isEditAdmin={this.state.isEditAdmin} 
          selectedAdminIndex={this.state.selectedAdminIndex} 
          handleAddAdminClose={this.handleAddAdminClose} 
          addNewAdmin={this.props.addNewAdmin} 
          updateAdmin={this.props.updateAdmin}
        />
        <Card.Group>
          {this.props.adminList.map((admin, index) => {
            return <Card raised key={index}>
              <Card.Content>
                <Card.Header style={{
                  color: 'blue'
                }}>
                  {admin.name}
                </Card.Header>
                <Card.Description>
                  <Item.Group as="Grid">
                    <Item>
                      <Item.Content>
                        <Item.Header>Mobile</Item.Header>
                        <Item.Meta>{admin.mobile}</Item.Meta>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Content>
                        <Item.Header>Email</Item.Header>
                        <Item.Meta>{admin.email}</Item.Meta>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button color='orange' inverted onClick={() => this.handleEditAdmin(admin, index)}>Edit</Button>
                  <Button color='red' inverted onClick={() => this.handleAdminDelete(index)}>Delete</Button>
                </div>
              </Card.Content>
            </Card>
          })}
        </Card.Group>
        <Modal open={this.state.isAdminDeleteModalVisible} onClose={this.handleAdminDeleteClose}>
          <Modal.Header>{`Are you sure that you want to delete Admin account?`}</Modal.Header>
          <Modal.Actions >
            <Button color='red' inverted onClick={this.handleAdminDeleteClose}>
              <Icon name='remove'/>
              No
            </Button>
            <Button color='green' inverted onClick={() => {
              this.props.deleteAdminAccount(this.state.indexOfAccToDelete);
              this.handleAdminDeleteClose()
            }}>
              <Icon name='check'/>
              Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </Segment>
    );
  }
}
export default AdminSection;
