import React, {Component} from 'react';
import {Button, Modal, Form, Icon, Input, Dropdown} from 'semantic-ui-react';
import {regEmail} from './Constants.js';
import {states} from './Constants.js';

class OfficeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            officeDetails: {
                state: "",
                city: "",
                locality: "",
                address: "",
                contactPerson: "",
                companyName: "",
                webSite: ""
            }
        }   
    };

  handleSave(event) {
    this.setState({
        officeDetails: {
            state: "",
            city: "",
            locality: "",
            address: "",
            contactPerson: "",
            companyName: "",
            webSite: ""
        }
    });
    this.props.handleClose();
  };      
  render() {
    return (
      <Modal closeOnDimmerClick={false} open={this.props.isOpen} onClose={this.props.handleClose}>
        <Modal.Header inverted style={{backgroundColor: 'olive', color: 'white'}}>
          Agent Office Details
        </Modal.Header>
        <Modal.Content style={{
          fontSize: "1.5rem"
        }}>                             
            <Form>
                <Form.Group  widths='equal'>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'olive'}}>State</div>
                        <Form.Select placeholder="select state" options={states} />
                    </Form.Field> 
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'olive'}}>City</div>
                        <Form.Select placeholder="select city" options={states} />
                    </Form.Field>                                  
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'olive'}}>Locality</div>
                        <Input name="locality" type="text" value={this.state.officeDetails.locality} />
                    </Form.Field>           
                </Form.Group>
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'olive'}}>Address</div>
                        <Input name="locality" type="text" value={this.state.officeDetails.address} />
                    </Form.Field>                             
                <Form.Group  widths='equal'>                                                                 
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'olive'}}>Contact Person Name</div>
                        <Input name="locality" type="text" value={this.state.officeDetails.contactPerson} />
                    </Form.Field>
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'olive'}}>Agency/Company Name</div>
                        <Input name="locality" type="text" value={this.state.officeDetails.companyName} />
                    </Form.Field>
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'olive'}}>Company WebSite</div>
                        <Input name="locality" type="text" value={this.state.officeDetails.webSite} />
                    </Form.Field>                    
                </Form.Group>
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
export default OfficeDetails;
