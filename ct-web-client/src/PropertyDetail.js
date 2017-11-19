import React, { Component } from 'react';
import { Grid, Image, Segment, Item, Icon } from 'semantic-ui-react'
import Header from './Header.js';
import SignIn from './SignIn.js';


class PropertyDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      isPropModalOpen: false,
    };
    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onPropModalClose = this.onPropModalClose.bind(this);
    this.OpenPropTypeModal = this.OpenPropTypeModal.bind(this);

  }

  handleSignInClick(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  OpenPropTypeModal(){
    this.setState({
      isPropModalOpen: true
    });
  };  

  onModalClose(){
    this.setState({
      isModalOpen: false
    });  
  };

  onPropModalClose(){
    this.setState({
      isPropModalOpen: false
    });
  };

  render() {
    
    return (
        <div>
          <Header signInCallback={this.handleSignInClick} propTypeClick={this.OpenPropTypeModal}/>
          <SignIn isModalOpen={this.state.isModalOpen} onModalClose={this.onModalClose} />  

          <div style={{width: "100%", padding: '150px 50px 50px 50px'}} >
            <Segment raised>                                        
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Item.Group>                    
                    <Item>
                      <Item.Content>
                        <Item.Header>Showroom for sale</Item.Header>
                        <Item.Meta>Phoenix mall, Nagar Road, Pune</Item.Meta>
                      </Item.Content>
                    </Item>
                    </Item.Group>                    
                  </Grid.Column>
                  <Grid.Column width={8}>              
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Item.Group>                    
                    <Item>
                      <Item.Content>
                        <Item.Header style={{float: 'right'}}>
                          <Icon name='inr' size='large' color='red'/>
                          <span style={{fontSize: 'large', color: 'red'}}>70 Lacs</span>                          
                        </Item.Header>
                      </Item.Content>
                    </Item>
                    </Item.Group>                    
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Image src='/images/planet-plaza-lucknow-2.jpg' />
                  </Grid.Column>
                  <Grid.Column width={13}>
                  </Grid.Column>
                </Grid.Row>
              </Grid>         
            </Segment> 

          </div>

        </div>
    );
  }
}

export default PropertyDetails;
