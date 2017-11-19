import React, {Component} from 'react';
import AdminSection from './AdminSection.js';
import PlanSection from './PlanSection.js';
import BuilderSection from './BuilderSection.js';
import AgentSection from './AgentSection.js';
import Agent from './Agent.js';
import UserSection from './UserSection.js';
import SuperAdminHeader from './SuperAdmin-Header.js';
import SuperAdminHome from './SuperAdmin-Home.js';
import { Route, Switch } from 'react-router-dom';
import MockAPI from './MockAPI.js'

class SuperAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superAdmin: MockAPI.getSuperAdmin(),
      activeItem: 'agents',
      adminList: MockAPI.getAdminList(),
      planList: MockAPI.getPlanList(),
      builderList: MockAPI.getBuilderList(),
      agentList: MockAPI.getAgentList(),
      userList: MockAPI.getUserList()
    };
    this.addNewAdmin = this.addNewAdmin.bind(this);
    this.addNewPlan = this.addNewPlan.bind(this);
    this.updatePlan = this.updatePlan.bind(this);
    this.togglePlanSuspension = this.togglePlanSuspension.bind(this);
    this.deleteAdminAccount = this.deleteAdminAccount.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.addNewBuilder = this.addNewBuilder.bind(this);
    this.addNewAgent = this.addNewAgent.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }
  addNewAdmin(adminObj) {
    let list = this.state.adminList;
    list.push(adminObj);
    this.setState({adminList: list});
  }
  addNewPlan(planObj) {
    let list = this.state.planList;
    list.push(planObj);
    this.setState({planList: list});
  }
  updatePlan(planObj, index) {
    let list = this.state.planList;
    list[index] = planObj;
    this.setState({planList: list});
  }
  togglePlanSuspension(planObj, index) {
    let list = this.state.planList;
    list[index].isSuspended = !list[index].isSuspended;
    this.setState({planList: list});
  }
  deleteAdminAccount(index) {
    let list = this.state.adminList;
    list.splice(index, 1);
    this.setState({adminList: list});
  }
  updateAdmin(adminObj, index) {
    let list = this.state.adminList;
    list[index] = adminObj;
    this.setState({adminList: list});
  }
  addNewBuilder(builderObj) {
    let list = this.state.builderList;
    list.push(builderObj);
    this.setState({builderList: list});
    console.log(this.state);
  }
  addNewAgent(agentObj) {
    let list = this.state.agentList;
    list.push(agentObj);
    this.setState({agentList: list});
    console.log(this.state);
  }
  addNewUser(userObj) {
    let list = this.state.userList;
    list.push(userObj);
    this.setState({userList: list});
    console.log(this.state);
  }      
  render() {
    return (
      <div >
        <SuperAdminHeader history={this.props.history} />
        <Switch>
          <Route exact path='/SuperAdmin' render={({history}) => <SuperAdminHome superAdmin={this.state.superAdmin} />} />
          <Route exact path='/SuperAdmin/Admins' render={({history}) => <AdminSection adminList={this.state.adminList} addNewAdmin={this.addNewAdmin} deleteAdminAccount={this.deleteAdminAccount} updateAdmin={this.updateAdmin} />} />
          <Route exact path='/SuperAdmin/Plans' render={({history}) => <PlanSection planList={this.state.planList} addNewPlan={this.addNewPlan} updatePlan={this.updatePlan} togglePlanSuspension={this.togglePlanSuspension}/>} />
          <Route exact path='/SuperAdmin/Builders' render={({history}) => <BuilderSection builderList={this.state.builderList} addNewBuilder={this.addNewBuilder} /> } />
          <Route exact path='/SuperAdmin/Agents' render={({history}) => <AgentSection agentList={this.state.agentList} addNewAgent={this.addNewAgent} /> } />
          <Route exact path='/SuperAdmin/Agents/:agentID' component={Agent} />
          <Route exact path='/SuperAdmin/Users' render={({history}) => <UserSection userList={this.state.userList} addNewUser={this.addNewUser} /> } />          
        </Switch>
      </div>
    );
  }
}
export default SuperAdmin;
