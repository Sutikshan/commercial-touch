import React, {Component} from 'react';
import { Form, Input, Header, Checkbox } from 'semantic-ui-react';
import {states} from './Constants.js';

class PropertyFeatures extends Component {
  
  render() {
    return (
        <div style={{padding: '10px'}}>
            <Form>
                <Form.Group  widths='equal'>                                          
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Floors Allowed for construction</div>
                        <Input name="allowedFloors" type="number" placeholder='Number of Floors Allowed' value={this.props.features.allowedFloors} />
                    </Form.Field>
                    <Form.Field>
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Number of Open Sides</div>
                        <Form.Select placeholder="select" options={[1, 2, 3, 4]} />
                    </Form.Field>
                    <Form.Field> 
                        <div style={{fontSize: '1.5rem', color: 'blue'}}>Width of road facing the plot</div>
                        <Input name="facingRoadWidth" type="number" placeholder='Width of road' label={{basic: true, content: 'Mtrs'}} labelPosition='right' value={this.props.features.facingRoadWidth} />
                    </Form.Field>   
                </Form.Group>

                    <Form.Field> 
                        <Checkbox name="isBoundryWall" label='Is Boundary Wall Made?' value='true' checked={this.props.features.isBoundaryWall === 'true'} />
                    </Form.Field>


                    <Form.Field> 
                        <Checkbox name="isShared" label='Is shared office space?' value='true' checked={this.props.features.isShared === 'true'} />
                    </Form.Field>
                    <Form.Field> 
                        <Checkbox name="isPersonalWashroom" label='Is Personal Washroom?' value='true' checked={this.props.features.isPersonalWashroom === 'true'} />
                    </Form.Field>
                    <Form.Field> 
                        <Checkbox name="isModifyInteriors" label='Is willing to modify interiors?' value='true' checked={this.props.features.isModifyInteriors === 'true'} />
                    </Form.Field>
                    <Form.Field> 
                        <Checkbox name="isCornerShop" label='Is corner shop?' value='true' checked={this.props.features.isCornerShop === 'true'} />
                    </Form.Field>
                    <Form.Field> 
                        <Checkbox name="isMainRoadFacing" label='Is main road facing?' value='true' checked={this.props.features.isMainRoadFacing === 'true'} />
                    </Form.Field>                                                   
            </Form>
        </div>

    );
  }
}
export default PropertyFeatures;
