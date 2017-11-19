import React, {Component} from 'react';
import { Form, Input, Header, Segment } from 'semantic-ui-react';
import {states} from './Constants.js';

class PropertyLocation extends Component {
  
  render() {
    return (
        <div style={{padding: '10px'}}>
            <Form>
                <Form.Group  widths='equal'>                                          
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>State</div>
                        <Form.Select placeholder="select" options={states} />
                    </Form.Field>              
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>City</div>
                        <Input name="tradeLicenseNumber" type="text" placeholder='City' value={this.props.location.city} />
                    </Form.Field>                            
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Locality</div>
                        <Input name="tradeLicenseNumber" type="text" placeholder='Locality' value={this.props.location.locality} />
                    </Form.Field>                            
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Project Name</div>
                        <Input name="tradeLicenseNumber" type="text" placeholder='Project Name' value={this.props.location.projectName} />
                    </Form.Field>                                                        
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Address</div>
                        <Input name="tradeLicenseNumber" type="text" value={this.props.location.address} />
                    </Form.Field>                                              
                </Form.Group>
            </Form>
        </div>

    );
  }
}
export default PropertyLocation;
