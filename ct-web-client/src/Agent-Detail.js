import React, {Component} from 'react';
import {Button, Modal, Form, Icon, Input, Dropdown} from 'semantic-ui-react';
import {regEmail} from './Constants.js';
import {agentDealType, agentTransactionType, propertyTypes, agentExpertise, agentValueAddedServices} from './Constants.js';

class AgentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                dealType: new Array(),
                transactionType: new Array(),
                propertyType: new Array(),
                operatingSince: "",
                expertiseIn: "1",
                authorizedOf: "",
                valueAddedServices: [],
                tradeLicense: {
                    number: '',
                    dateOfIssue: ''
                },
                valuableClients: []
            }
        }   
      this.btnColor = this.btnColor.bind(this);
    };

  handleSave(event) {
    this.setState({
      profile: {
          dealType: new Array(),
          transactionType: new Array(),
          propertyType: new Array(),
          operatingSince: "",
          expertiseIn: "",
          authorizedOf: "",
          valueAddedServices: new Array(),
          tradeLicense: {
              number: '',
              dateOfIssue: ''
          },
          valuableClients: new Array()
      }    
    });
    this.props.handleRegisterClose();
  };  
  btnColor(value, propName){
    if(this.state.profile[propName].findIndex((item) => item == value) > -1){
      return 'yellow';
    } else {
      return 'light-grey';
    }
  }
  addRemoveItem(type, propName){
    let profile = this.state.profile;
    let index = profile[propName].findIndex((item) => item == type.value);
    if(index >= 0){
      profile[propName].splice(index, 1);
    } else {
      profile[propName].push(type.value);
    }                      
    this.setState({profile,})    
  }    
  render() {
    return (
      <Modal size="fullscreen" closeOnDimmerClick={false} open={this.props.isOpen} onClose={this.props.handleClose}>
        <Modal.Header inverted style={{backgroundColor: '#fbbd08', color: 'white'}}>
          Agent Company Details
        </Modal.Header>
        <Modal.Content style={{
          fontSize: "1.5rem"
        }}>

          <div style={{width: '100%', paddingBottom: '30px'}}>
              <div style={{color: '#fbbd08'}}>I am dealing in</div>
              {
                agentDealType.map((type, index) => {
                  return (<Button size='big' style={{marginBottom: '10px'}} color={ this.btnColor(type.value, 'dealType') } onClick={() => this.addRemoveItem(type, 'dealType')}>
                      {type.text}
                  </Button>)                  
                })
              }
          </div>
          <div style={{width: '100%', paddingBottom: '30px'}}>
              <div style={{color: '#fbbd08'}}>Transaction Types</div>
              {
                agentTransactionType.map((type, index) => {
                  return (<Button size='big' style={{marginBottom: '10px'}} color={ this.btnColor(type.value, 'transactionType') } onClick={() => this.addRemoveItem(type, 'transactionType')}>
                      {type.text}
                  </Button>)                  
                })
              }
          </div>
          <div style={{width: '100%', paddingBottom: '30px'}}>
              <div style={{color: '#fbbd08'}}>Property Types</div>
              {
                propertyTypes.map((type, index) => {
                  return (<Button size='big' style={{marginBottom: '10px'}} color={ this.btnColor(type.value, 'propertyType') } onClick={() => this.addRemoveItem(type, 'propertyType')}>
                      {type.text}
                  </Button>)                  
                })
              }
          </div>   
          <div style={{width: '100%', paddingBottom: '30px'}}>
              <div style={{color: '#fbbd08'}}>Value Added Services</div>
              {
                agentValueAddedServices.map((type, index) => {
                  return (<Button size='big' style={{marginBottom: '10px'}} color={ this.btnColor(type.value, 'valueAddedServices') } onClick={() => this.addRemoveItem(type, 'valueAddedServices')}>
                      {type.text}
                  </Button>)                  
                })
              }
          </div>                              

          <Form>
            <Form.Group  widths='equal'>
              <Form.Field> 
                <div style={{fontSize: '1.5rem', color: '#fbbd08'}}>Expertise In</div>
                <Form.Select placeholder="select" options={agentExpertise} />
              </Form.Field> 
              <Form.Field>
                <div style={{fontSize: '1.5rem', color: '#fbbd08'}}>Trade License Number</div>
                <Input name="tradeLicenseNumber" type="text" placeholder='Trade License Number' value={this.state.profile.tradeLicense.number} />
              </Form.Field>                                  
              <Form.Field>
                <div style={{fontSize: '1.5rem', color: '#fbbd08'}}>Date of Issue of Trade License</div>
                <Input name="tradeLicenseNumber" type="date" value={this.state.profile.tradeLicense.dateOfIssue} />
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
export default AgentDetail;
