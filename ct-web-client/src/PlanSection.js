import React, {Component} from 'react';
import {Button, Segment, Card, Item, Menu} from 'semantic-ui-react';
import Plan from './Plan.js';
function getNewPlanObj() {
  return {
    name: '',
    maxProperties: "",
    isSuspended: false,
    duration: {
      value: "",
      unit: 2
    },
    fee: {
      value: "",
      unit: 1
    }
  };
};
function PlanModal(props) {
  if (props.isAddPlan) {
    return <Plan planObj={props.planObj} selectedPlanIndex={props.selectedPlanIndex} isPlanEdit={props.isPlanEdit} isAddPlan={props.isAddPlan} handleAddPlanClose={props.handleAddPlanClose} addNewPlan={props.addNewPlan} updatePlan={props.updatePlan}/>
  } else {
    return null;
  }
}
class PlanSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddPlan: false,
      isPlanEdit: false,
      selectedPlanIndex: -1,
      planObj: getNewPlanObj()
    };
    this.handleAddNewPlanClick = this.handleAddNewPlanClick.bind(this);
    this.handleEditPlanClick = this.handleEditPlanClick.bind(this);
    this.handleAddPlanClose = this.handleAddPlanClose.bind(this);
  }
  handleAddNewPlanClick(event) {
    this.setState({
      isAddPlan: !this.state.isAddPlan,
      isPlanEdit: false,
      planObj: getNewPlanObj()
    });
  };
  handleEditPlanClick(planObj, index) {
    this.setState({
      isAddPlan: !this.state.isAddPlan,
      isPlanEdit: true,
      selectedPlanIndex: index,
      planObj: planObj
    });
  };
  handleAddPlanClose(event) {
    this.setState({isAddPlan: false});
  };
  render() {
    return (
      <Segment attached="bottom">
        <Menu secondary>
          <Menu.Item position="right">
            <Button onClick={this.handleAddNewPlanClick}>Add New Plan</Button>
          </Menu.Item>
        </Menu>
        <PlanModal planObj={this.state.planObj} selectedPlanIndex={this.state.selectedPlanIndex} isPlanEdit={this.state.isPlanEdit} isAddPlan={this.state.isAddPlan} handleAddPlanClose={this.handleAddPlanClose} addNewPlan={this.props.addNewPlan} updatePlan={this.props.updatePlan}/>
        <Card.Group>
          {this.props.planList.map((plan, index) => {
            return <Card raised key={index}>
              <Card.Content>
                <Card.Header style={{
                  color: 'blue'
                }}>
                  {plan.name}
                </Card.Header>
                <Card.Description>
                  <Item.Group as="Grid">
                    <Item>
                      <Item.Content>
                        <Item.Header>Max Properties</Item.Header>
                        <Item.Meta>{plan.maxProperties}</Item.Meta>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Content>
                        <Item.Header>Duration</Item.Header>
                        <Item.Meta>{plan.duration.value + " " + plan.duration.unit}</Item.Meta>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Content>
                        <Item.Header>Fees</Item.Header>
                        <Item.Meta>{plan.fee.value + " " + plan.fee.unit}</Item.Meta>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Content>
                        <Item.Header>Total Subscriptions</Item.Header>
                        <Item.Meta>0</Item.Meta>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Content>
                        <Item.Header>Active Subscriptions</Item.Header>
                        <Item.Meta>0</Item.Meta>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button color='orange' inverted onClick={() => this.handleEditPlanClick(plan, index)}>Edit</Button>
                  <Button color={plan.isSuspended
                    ? 'green'
                    : 'red'} inverted onClick={() => this.props.togglePlanSuspension(plan, index)}>{plan.isSuspended
                      ? 'Resume'
                      : 'Suspend'}</Button>
                </div>
              </Card.Content>
            </Card>
          })}
        </Card.Group>
      </Segment>
    );
  }
}
export default PlanSection;
