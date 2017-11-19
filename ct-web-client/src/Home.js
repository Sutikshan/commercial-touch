import React, { Component } from 'react';
import {Image, Segment, Card, Icon, Button} from 'semantic-ui-react';
import Header from './Header.js';
import SignIn from './SignIn.js';
import GooglePlaces from './GooglePlaces.js';
import './App.css';
import PropertyDetails from './PropertyDetail.js';
import { Route, Switch } from 'react-router-dom';

// import PropType from './Prop-Type-Selector.js';

class Home extends Component {

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
    this.onPropertyClick = this.onPropertyClick.bind(this);

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

    onPropertyClick(){
     this.props.history.push('/PropertyDetails');
  };


  render() {
    return (
      <div>
        <Header signInCallback={this.handleSignInClick} propTypeClick={this.OpenPropTypeModal}/>
        <SignIn isModalOpen={this.state.isModalOpen} onModalClose={this.onModalClose} />  
         {/* <PropType isModalOpen={this.state.isPropModalOpen} onModalClose={this.onPropModalClose} />   */}
        {/* <GooglePlaces /> */}
         <div style={{width: "100%", padding: '150px 50px 50px 50px'}} >
          
            <Card fluid raised style={{cursor: 'pointer'}} onClick={this.onPropertyClick}>

              <Image src='/images/planet-plaza-lucknow-2.jpg' />
              <Card.Content>
                <Card.Header>
                  Showroom for sale
                </Card.Header>
                <Card.Description>
                  <div>
                  <span style={{float: 'left'}}>Phoenix mall, Nagar Road, Pune</span>
                  <span style={{float: 'right'}}>Posted 1st October 2017</span>
                  </div>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <p style={{float: 'left'}}>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>70 Lacs</span>
                  </p>
                  <Button floated='right' positive>Contact</Button>
                </div>
              </Card.Content>
            </Card>

            <div style={{padding: '10vh 0 5vh 0', textAlign: 'center'}} >
              <h3>Bestsellers</h3>
            </div>

            <Card.Group stackable fluid itemsPerRow="2">

              <Card raised >
                <Image src='/images/prop1.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Tower-2, Magarpatta city, Pune
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>

              <Card raised >
                <Image src='/images/prop2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>

              <Card raised >
                <Image src='/images/prop4.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>
              
              <Card raised >
                <Image src='/images/prop3.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>                                    
            </Card.Group> 

            <div style={{padding: '10vh 0 5vh 0', textAlign: 'center'}} >
              <h3>Featured Properties</h3>
            </div>

            <Card.Group stackable fluid itemsPerRow="4">
              <Card raised >
                <Image src='/images/planet-plaza-lucknow-2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>
              <Card raised >
                <Image src='/images/planet-plaza-lucknow-2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>
              <Card raised >
                <Image src='/images/planet-plaza-lucknow-2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>
              <Card raised >
                <Image src='/images/planet-plaza-lucknow-2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>  

              <Card raised >
                <Image src='/images/planet-plaza-lucknow-2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>
              <Card raised >
                <Image src='/images/planet-plaza-lucknow-2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>
              <Card raised >
                <Image src='/images/planet-plaza-lucknow-2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>
              <Card raised >
                <Image src='/images/planet-plaza-lucknow-2.jpg' />
                <Card.Content>
                  <Card.Header>
                    Office space for Lease
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Posted today
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Office space for Lease is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='inr' size='large' color='red'/>
                    <span style={{fontSize: 'large', color: 'red'}}>1.5 Lacs/month</span>
                  </p>
                </Card.Content>
              </Card>                                    
                                                          
            </Card.Group>                    

        </div> 

      </div>
    );
  }
}

export default Home;
