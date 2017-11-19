import React, { Component } from 'react';
import { Image, Modal, Icon, Button, Form, Input, Card } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

class PropType extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Modal open={this.props.isModalOpen} onClose={this.props.onModalClose}>
          <Modal.Header>Select Property Type</Modal.Header>
          <Modal.Content style={{fontSize: "1.5rem"}}>
            <Card.Group stackable fluid itemsPerRow="3">

              <Card raised >
                <Card.Content>
                  <Card.Header>
                    Land
                  </Card.Header>
                </Card.Content>
              </Card>
              <Card raised >
                <Card.Content>
                  <Card.Header>
                    Shop
                  </Card.Header>
                </Card.Content>
              </Card>
              <Card raised >
                <Card.Content>
                  <Card.Header>
                    Showroom
                  </Card.Header>
                </Card.Content>
              </Card>
              <Card raised >
                <Card.Content>
                  <Card.Header>
                    Office Space
                  </Card.Header>
                </Card.Content>
              </Card>
              <Card raised >
                <Card.Content>
                  <Card.Header>
                    Industrial Land
                  </Card.Header>
                </Card.Content>
              </Card>
              <Card raised >
                <Card.Content>
                  <Card.Header>
                    Industrial Building
                  </Card.Header>
                </Card.Content>
              </Card>
              <Card raised >
                <Card.Content>
                  <Card.Header>
                    Industrial Shed
                  </Card.Header>
                </Card.Content>
              </Card>              
              <Card raised >
                <Card.Content>
                  <Card.Header>
                    Warehouse / Godown
                  </Card.Header>
                </Card.Content>
              </Card>                                                                                    
                                   
            </Card.Group>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' inverted onClick={this.props.onModalClose}>
              <Icon name='remove' /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
    );
  }
}

export default PropType;
