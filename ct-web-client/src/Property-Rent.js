import React, {Component} from 'react';
import { Form, Input, Header, Checkbox } from 'semantic-ui-react';
import {states} from './Constants.js';

class PropertyRent extends Component {
  
  render() {
    return (
        <div style={{padding: '10px'}}>
            <Form>
                <Form.Group  widths='equal'>                                          
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Monthly Rent</div>
                        <Input name="plotArea" type="number" placeholder='plot area' label={{basic: true, content: 'INR/Month'}} labelPosition='right' value={this.props.rent.monthlyRent} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Maintenance Charges</div>
                        <Input name="maintenanceCharges" type="number" placeholder='Maintenance Charges' label={{basic: true, content: 'INR/Month'}} labelPosition='right' value={this.props.rent.maintenance} />
                    </Form.Field>                    
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Other charges</div>
                        <Input name="otherCharges" type="number" placeholder='other charges' label={{basic: true, content: 'INR/Month'}} labelPosition='right' value={this.props.rent.otherCharges} />
                    </Form.Field>                    
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Security Amount</div>
                        <Input name="securityAmount" type="number" placeholder='security amount' label={{basic: true, content: 'INR'}} labelPosition='right' value={this.props.rent.securityAmount} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Brokerage</div>
                        <Input name="brokerage" type="number" placeholder='Brokerage' label={{basic: true, content: '%'}} labelPosition='right' value={this.props.rent.brokerage} />
                    </Form.Field>                    
                </Form.Group>
                <Form.Field> 
                    <Checkbox name="eAndWCharges" label='Is electricity and water charges included?' value='true' checked={this.props.rent.isEleWaterCharges === 'true'} />
                </Form.Field>                
            </Form>
        </div>

    );
  }
}
export default PropertyRent;
