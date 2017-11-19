import React, {Component} from 'react';
import { Form, Input, Header, Dropdown } from 'semantic-ui-react';
import {durations} from './Constants.js';

class PropertyTransaction extends Component {
  
  render() {
    return (
        <div style={{padding: '10px'}}>
            <Form>

                <Form.Group inline> 
                    <label style={{fontSize: '1.5rem', color: 'blue'}}>Transaction Type</label>
                    <Form.Radio name="transactionType" label='New' value='1' checked={this.props.transaction.transactionType === '1'} />
                    <Form.Radio name="transactionType" label='Resale' value='2' checked={this.props.transaction.transactionType === '2'} />
                </Form.Group>
                <Form.Group inline> 
                    <label style={{fontSize: '1.5rem', color: 'blue'}}>Currently Leased Out</label>
                    <Form.Radio name="isLeasedOut" label='Yes' value='1' checked={this.props.transaction.isLeasedOut === '1'} />
                    <Form.Radio name="isLeasedOut" label='No' value='2' checked={this.props.transaction.isLeasedOut === '2'} />
                </Form.Group>
                <Form.Group inline> 
                    <label style={{fontSize: '1.5rem', color: 'blue'}}>Possession Status</label>
                    <Form.Radio name="possessionStatus" label='Under construction' value='1' checked={this.props.transaction.possessionStatus === '1'} />
                    <Form.Radio name="possessionStatus" label='Ready to move' value='2' checked={this.props.transaction.possessionStatus === '2'} />
                </Form.Group>
                <Form.Group inline> 
                    <label style={{fontSize: '1.5rem', color: 'blue'}}>Available from</label>
                    <Form.Radio name="availableFrom" label='A date' value='1' checked={this.props.transaction.availableFrom === '1'} />
                    <Form.Radio name="availableFrom" label='Immediately' value='2' checked={this.props.transaction.availableFrom === '2'} />
                </Form.Group>
                <Form.Group inline> 
                    <label style={{fontSize: '1.5rem', color: 'blue'}}>Age of construction</label>
                    <Input name="constructionAge" type="number" placeholder='No of months/years' label={<Dropdown options={durations} placeholder='select' />} labelPosition='right' value={this.props.transaction.constructionAge} />
                </Form.Group>
            </Form>
        </div>

    );
  }
}
export default PropertyTransaction;
