import React, {Component} from 'react';
import {Button, Modal, Form, Icon, Input, Dropdown, Divider, Accordion} from 'semantic-ui-react';
import {regEmail} from './Constants.js';
import {propertyPostType, propertyType, states} from './Constants.js';
import PropertyLocation from './Property-Location.js';
import PropertyArea from './Property-Area.js';
import PropertyRent from './Property-Rent.js';
import PropertyPrice from './Property-Price.js';
import PropertyFeatures from './Property-Features.js';
import PropertyTransaction from './Property-Transaction.js';

class PropertyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: {
                propertyPostType: "1",
                propertyType: "",
                location: {
                    state: "",
                    city: "",
                    locality: "",
                    projectName: "",
                    address: ""
                },
                area: {},
                rent: {},
                price: {},
                features: {},
                transaction: {}
            }
        } 
        this.handlePropertyPostTypeChange = this.handlePropertyPostTypeChange.bind(this);  
    };

  handleSave(event) {
    this.setState({
        property: {
            propertyPostType: "1",
            propertyType: "",
            location: {
                state: "",
                city: "",
                locality: "",
                projectName: "",
                address: ""
            }
        }    
    });
    this.props.handleRegisterClose();
  };  

    handlePropertyPostTypeChange(event, { value }) {
        let prop = this.state.property;
        prop.propertyPostType = value;
        this.setState({
            property: prop
        });
    };
  
  render() {
    return (
      <Modal size="fullscreen" closeOnDimmerClick={false} open={this.props.isOpen} onClose={this.props.handleClose}>
        <Modal.Header inverted style={{backgroundColor: 'blue', color: 'white'}}>
          Post Property
        </Modal.Header>
        <Modal.Content style={{
          fontSize: "1.5rem"
        }}>    

          <Form>
            <Form.Group inline> 
              <label style={{fontSize: '1.5rem', color: 'blue'}}>For</label>
              <Form.Radio name="propertyPostType" label='Sale' value='1' checked={this.state.property.propertyPostType === '1'} onChange={this.handlePropertyPostTypeChange} />
              <Form.Radio name="propertyPostType" label='Rent' value='2' checked={this.state.property.propertyPostType === '2'} onChange={this.handlePropertyPostTypeChange} />
            </Form.Group>
            <Form.Group> 
              <Form.Field> 
                <div style={{fontSize: '1.5rem', color: 'blue'}}>Property Type</div>
                <Form.Select placeholder="select" options={propertyType} />
              </Form.Field>
            </Form.Group>                
          </Form>        

          <Accordion styled fluid
            panels={[
              {
                title: 'Location',
                content: <PropertyLocation location={this.state.property.location} />
              },
              {
                title: 'Area',
                content: <PropertyArea area={this.state.property.area} />
              },
              {
                title: 'Rent Details',
                content: <PropertyRent rent={this.state.property.rent} />
              },
              {
                title: 'Price Details',
                content: <PropertyPrice price={this.state.property.price} />
              },
              {
                title: 'Features',
                content: <PropertyFeatures features={this.state.property.features} />
              },
              {
                title: 'Transaction type and Availability',
                content: <PropertyTransaction transaction={this.state.property.transaction} />
              }                                          
            ]} 
          />


        </Modal.Content>
        <Modal.Actions>
          <Button color='red' inverted onClick={this.props.handleClose}>
            <Icon name='remove'/>
            Cancel
          </Button>
          <Button color='green' inverted onClick={this.handleSave}>
            <Icon name='add' />
            Post
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default PropertyDetail;
