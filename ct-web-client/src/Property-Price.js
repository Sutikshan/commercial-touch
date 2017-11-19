import React, {Component} from 'react';
import { Form, Input, Header, Checkbox } from 'semantic-ui-react';
import {states} from './Constants.js';

class PropertyPrice extends Component {
  
  render() {
    return (
        <div style={{padding: '10px'}}>
            <Form>
                <Form.Group  widths='equal'>                                          
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Expected Price</div>
                        <Input name="expectedPrice" type="number" placeholder='Expected Price' label={{basic: true, content: 'INR'}} labelPosition='right' value={this.props.price.expectedPrice} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Price per SqFt</div>
                        <Input name="pricePerSqFt" type="number" placeholder='Price per SqFt' label={{basic: true, content: 'INR/SqFt'}} labelPosition='right' value={this.props.price.sqFtPrice} />
                    </Form.Field>                    
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Other charges</div>
                        <Input name="otherCharges" type="number" placeholder='other charges' label={{basic: true, content: 'INR/Month'}} labelPosition='right' value={this.props.price.otherCharges} />
                    </Form.Field>                    
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Maintenance Charges</div>
                        <Input name="maintenanceCharges" type="number" placeholder='Amount' label={{basic: true, content: 'INR/Month'}} labelPosition='right' value={this.props.price.maintenance} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Booking / Token Amount</div>
                        <Input name="tokenAmount" type="number" placeholder='Amount' label={{basic: true, content: 'INR'}} labelPosition='right' value={this.props.price.tokenAmount} />
                    </Form.Field>                    
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Brokerage</div>
                        <Input name="brokerage" type="number" placeholder='Brokerage' label={{basic: true, content: '%'}} labelPosition='right' value={this.props.price.brokerage} />
                    </Form.Field>                    
                </Form.Group>
                <Form.Field> 
                    <Checkbox name="eAndWCharges" label='Is Stamp Duty & Registration charges excluded?' value='true' checked={this.props.price.isStampRegCharges === 'true'} />
                </Form.Field>   
                <Form.Field> 
                    <Checkbox name="plcCarCharges" label='Is Price Includes PLC and Car parking?' value='true' checked={this.props.price.isPlcCarCharges === 'true'} />
                </Form.Field>                                
            </Form>
        </div>

    );
  }
}
export default PropertyPrice;
