import React, {Component} from 'react';
import { Form, Input, Header, Checkbox } from 'semantic-ui-react';
import {states} from './Constants.js';

class PropertyArea extends Component {
  
  render() {
    return (
        <div style={{padding: '10px'}}>
            <Form>
                <Form.Group  widths='equal'>                                          
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Plot Area</div>
                        <Input name="plotArea" type="text" placeholder='plot area' label={{basic: true, content: 'SqFt'}} labelPosition='right' value={this.props.area.plotArea} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Covered Area</div>
                        <Input name="coveredArea" type="text" placeholder='Covered area' label={{basic: true, content: 'SqFt'}} labelPosition='right' value={this.props.area.coveredArea} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Carpet Area</div>
                        <Input name="carpetArea" type="text" placeholder='Carpet area' label={{basic: true, content: 'SqFt'}} labelPosition='right' value={this.props.area.carpetArea} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Plot Length</div>
                        <Input name="plotLength" type="text" placeholder='Plot Length' label={{basic: true, content: 'Ft'}} labelPosition='right' value={this.props.area.plotLength} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Plot Breadth</div>
                        <Input name="plotBreadth" type="text" placeholder='Plot Breadth' label={{basic: true, content: 'Ft'}} labelPosition='right' value={this.props.area.plotBreadth} />
                    </Form.Field>                                         
                </Form.Group>
                <Form.Field> 
                    <Checkbox name="plotBreadth" label='This is a corner plot' value='true' checked={this.props.area.isCornerPlot === 'true'} />
                </Form.Field>                
            </Form>
        </div>

    );
  }
}
export default PropertyArea;
