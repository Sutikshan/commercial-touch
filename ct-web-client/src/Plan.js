import React, {Component} from 'react';
import {
  Button,
  Modal,
  Form,
  Icon,
  Dropdown,
  Input
} from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import {durations, currency} from './Constants.js';
class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: JSON.parse(JSON.stringify(this.props.planObj))
    };
    this.handlePlanChange = this.handlePlanChange.bind(this);
    this.handlePlanDurationChange = this.handlePlanDurationChange.bind(this);
    this.handlePlanFeeChange = this.handlePlanFeeChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleAddPlan = this.handleAddPlan.bind(this);
    this.handleEditPlan = this.handleEditPlan.bind(this);
  }
  handlePlanChange(event) {
    const plan = this.state.plan;
    plan[event.target.name] = event.target.value;
    this.setState({plan});
  }
  handlePlanDurationChange(event) {
    const plan = this.state.plan;
    plan.duration[event.target.name] = event.target.value;
    this.setState({plan});
  }
  handlePlanFeeChange(event) {
    const plan = this.state.plan;
    plan.fee[event.target.name] = event.target.value;
    this.setState({plan});
  }
  handleDropdownChange(event, data) {
    const plan = this.state.plan;
    switch (data.name) {
      case "durationUnit":
        plan.duration.unit = data.value
        break;
      case "feeUnit":
        plan.fee.unit = data.value
        break;
      default:
    }
    this.setState({plan});
  }
  handleAddPlan(event) {
    this.props.addNewPlan(this.state.plan);
    this.props.handleAddPlanClose();
  };
  handleEditPlan(event) {
    this.props.updatePlan(this.state.plan, this.props.selectedPlanIndex);
    this.props.handleAddPlanClose();
  };
  render() {
    return (
      <Modal open={this.props.isAddPlan} onClose={this.props.handleAddPlanClose}>
        <Modal.Header>Add New Plan</Modal.Header>
        <Modal.Content style={{
          fontSize: "1.5rem"
        }}>
          <Form>
            <Form.Field required error={this.state.plan.name === ""}>
              <label>Plan name</label>
              <Input name="name" type="text" placeholder='Plan name' value={this.state.plan.name} onChange={this.handlePlanChange}/>
            </Form.Field>
            <Form.Field required error={this.state.plan.maxProperties === ""}>
              <label>Maximum properties allowed</label>
              <Input name="maxProperties" type="number" placeholder='Number of properties' value={this.state.plan.maxProperties} onChange={this.handlePlanChange}/>
            </Form.Field>
            <Form.Field required error={this.state.plan.duration.value === ""}>
              <label>Duration Value</label>
              <Input name="value" type="number" placeholder='Duration value' value={this.state.plan.duration.value} onChange={this.handlePlanDurationChange} label={< Dropdown name = "durationUnit" placeholder = 'Select Duration unit' selection options = {
                durations
              }
              value = {
                this.state.plan.duration.unit
              }
              onChange = {
                this.handleDropdownChange
              } />} labelPosition="right"/>
            </Form.Field>
            <Form.Field required error={this.state.plan.fee.value === ""}>
              <label>Fee</label>
              <Input name="value" type="number" placeholder='Duration value' value={this.state.plan.fee.value} onChange={this.handlePlanFeeChange} label={< Dropdown name = "feeUnit" placeholder = 'Select Duration unit' selection options = {
                currency
              }
              value = {
                this.state.plan.fee.unit
              }
              onChange = {
                this.handleDropdownChange
              } />} labelPosition="right"/>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' inverted onClick={this.props.handleAddPlanClose}>
            <Icon name='remove'/>
            Cancel
          </Button>
          <Route render={({history}) => (
            <Button color='green' inverted onClick={this.props.isPlanEdit
              ? this.handleEditPlan
              : this.handleAddPlan}>
              <Icon name={this.props.isPlanEdit
                ? 'edit'
                : 'add'}/> {this.props.isPlanEdit
                ? 'Edit'
                : 'Add'}
            </Button>
          )}/>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default Plan;
