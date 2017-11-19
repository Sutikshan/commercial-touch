import React, {Component} from 'react';
import MockAPI from './MockAPI.js'
import { Segment, Grid, Label, Card, Item, Button, Header } from 'semantic-ui-react';
import AgentDetail from './Agent-Detail.js';
import OfficeDetails from './Office-Details.js';
import ReraDetails from './Rera-Details.js';
import PropertyDetails from './Property-Detail.js';

class Agent extends Component {   
  constructor(props) {
    super(props);
    this.state = {
        agent: MockAPI.getAgentById(this.props.match.params.agentID),
        isCompanyModalVisible: false,
        isOfficeModalVisible: false,
        isReraModalVisible: false,
        isPropertyModalVisible: false
    };
    this.toggleCompanyModal = this.toggleCompanyModal.bind(this);
    this.toggleOfficeModal = this.toggleOfficeModal.bind(this);
    this.toggleReraModal = this.toggleReraModal.bind(this);
    this.togglePropertyModal = this.togglePropertyModal.bind(this);
  }  
  toggleCompanyModal(){
    this.setState({
        isCompanyModalVisible: !this.state.isCompanyModalVisible
    })
  }
  toggleOfficeModal(){
    this.setState({
        isOfficeModalVisible: !this.state.isOfficeModalVisible
    })
  }
  toggleReraModal(){
    this.setState({
        isReraModalVisible: !this.state.isReraModalVisible
    })
  }
  togglePropertyModal(){
    this.setState({
        isPropertyModalVisible: !this.state.isPropertyModalVisible
    })
  }
  render() {
    return (
        <div style={{padding: "20px"}}>
            <AgentDetail handleClose={this.toggleCompanyModal} isOpen={this.state.isCompanyModalVisible}/>
            <OfficeDetails handleClose={this.toggleOfficeModal} isOpen={this.state.isOfficeModalVisible}/>
            <ReraDetails handleClose={this.toggleReraModal} isOpen={this.state.isReraModalVisible}/>            
            <PropertyDetails handleClose={this.togglePropertyModal} isOpen={this.state.isPropertyModalVisible}/>            

            <Segment raised>
                <Label color='red' ribbon='left'>Profile</Label>
                <Header as='h2'>{this.state.agent.name}</Header>
                <Grid>
                    <Grid.Column width={5}>
                        <Item>
                            <Item.Content>
                                <Item.Header>Mobile</Item.Header>
                                <Item.Meta>{this.state.agent.mobile}</Item.Meta>
                            </Item.Content>
                        </Item>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Item>
                            <Item.Content>
                                <Item.Header>Email</Item.Header>
                                <Item.Meta>{this.state.agent.email}</Item.Meta>
                            </Item.Content>
                        </Item>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign='right'>
                        <Button size='massive' color='red'>
                            Edit
                        </Button>
                        <Button size='massive' color='red'>
                            Reset Password
                        </Button>                                                
                    </Grid.Column>                    
                </Grid>
            </Segment>        

            <Segment raised >
                <Label color='yellow' ribbon='left'>Company Details</Label>
                <div style={{width: '100%', textAlign: 'right'}}>
                    <Button size='massive' color='yellow' onClick={this.toggleCompanyModal}>
                        Add Company Details
                    </Button>
                </div>
            </Segment>

            <Segment raised >
                <Label color='olive' ribbon='left'>Office Details</Label>
                <div style={{width: '100%', textAlign: 'right'}}>
                    <Button size='massive' color='olive' onClick={this.toggleOfficeModal}>
                        Add Office Details
                    </Button>
                </div>
            </Segment>

            <Segment raised >
                <Label color='teal' ribbon='left'>RERA Details</Label>
                <div style={{width: '100%', textAlign: 'right'}}>
                    <Button size='massive' color='teal' onClick={this.toggleReraModal}>
                        Add RERA Details
                    </Button>
                </div>
            </Segment>            

            <Segment raised>
                <Label color='orange' ribbon='left'>Subscription</Label>
            </Segment>

            <Segment raised>
                <Label color='blue' ribbon='left'>Properties</Label>
                <div style={{width: '100%', textAlign: 'right'}}>
                    <Button size='massive' color='blue' onClick={this.togglePropertyModal}>
                        Add Property
                    </Button>
                </div>                
            </Segment>                        
        </div>
    );
  }
}
export default Agent;
