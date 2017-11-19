import React, {Component} from 'react';
import {Button, Modal, Form, Icon, Input, Dropdown} from 'semantic-ui-react';
import {states} from './Constants.js';

class ReraDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reraDetails: {
                state: "",
                reraID: "",
                validity: "",
                verificationLink: "",
                supportingDocuments: []
            }
        }   
    };

  handleSave(event) {
    this.setState({
        reraDetails: {
            state: "",
            reraID: "",
            validity: "",
            verificationLink: "",
            supportingDocuments: []
        }
    });
    this.props.handleClose();
  };      
  render() {
    return (
      <Modal size="large" closeOnDimmerClick={false} open={this.props.isOpen} onClose={this.props.handleClose}>
        <Modal.Header inverted style={{backgroundColor: 'teal', color: 'white'}}>
          Agent RERA Details
        </Modal.Header>
        <Modal.Content style={{
          fontSize: "1.5rem"
        }}>                             
            <Form>
                <Form.Group  widths='equal'>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'teal'}}>State</div>
                        <Form.Select placeholder="select state" options={states} />
                    </Form.Field> 
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'teal'}}>RERA ID</div>
                        <Input name="locality" type="text" value={this.state.reraDetails.reraID} />
                    </Form.Field>                                  
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'teal'}}>Validity</div>
                        <Input name="locality" type="date" value={this.state.reraDetails.validity} />
                    </Form.Field>           
                </Form.Group>
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'teal'}}>Verification Link</div>
                        <Input name="locality" type="text" value={this.state.reraDetails.verificationLink} />
                    </Form.Field>                                                 
            </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' inverted onClick={this.props.handleClose}>
            <Icon name='remove'/>
            Cancel
          </Button>
          <Button color='green' inverted onClick={this.handleSave}>
            <Icon name='add' />
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default ReraDetails;
