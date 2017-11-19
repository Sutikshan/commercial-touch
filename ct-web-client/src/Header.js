import React, { Component } from 'react';
import { Menu, Button, Dropdown, Card } from 'semantic-ui-react'
import { propertyType } from './Constants.js'
import GooglePlaces from './GooglePlaces.js';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      isRent: false,
      city: 1,
      propType: undefined
    };
    this.onRentorSaleClick = this.onRentorSaleClick.bind(this);
    this.onCitySelect = this.onCitySelect.bind(this);
    this.onPropSelect = this.onPropSelect.bind(this);
  }

  onCitySelect(event, val){
    this.setState({
      city: val.value
    });    
  }  

  onPropSelect(event, val){
    this.setState({
      propType: val.value
    });    
  }    

  onRentorSaleClick(){
    this.setState({
      isRent: !this.state.isRent
    });    
  }  

  render() {
    return (
        <Menu fixed="top" style={{fontSize: "1.5rem"}} color="red">
          <Menu.Item color="blue" header>Commercial Touch</Menu.Item>
          <Menu.Item>
            <Button.Group size="huge">
              <Button toggle active={this.state.isRent} onClick={this.onRentorSaleClick} >Rent</Button>
              <Button.Or />
              <Button toggle active={!this.state.isRent} onClick={this.onRentorSaleClick} >Sale</Button>
            </Button.Group>
          </Menu.Item>   
          {/* <Menu.Item>
             <Dropdown 
             color='orange'
             onChange={this.onCitySelect}
              button
              value={this.state.city}
              options={[{key: 1, text: 'Pune', value: 1}, {key: 2, text: 'Jaipur', value: 2}]}
              placeholder='City' 
            />
            </Menu.Item>         */}
          <Menu.Item>
            {/* <Button 
              onClick={this.props.propTypeClick}
            /> */}
              <Dropdown 
             onChange={this.onPropSelect}
              value={this.state.propType}
              options={propertyType}
              placeholder='Property Type' 
            />
          </Menu.Item>                 
          {/* <Menu.Item>
            <Button 
              inverted
              color='blue'
              icon="filter"
              labelPosition='left'
              content = 'More'
            />             
          </Menu.Item> */}
          <Menu.Item>
            <GooglePlaces
            />             
          </Menu.Item>          
          <Menu.Item inverted>
            <Button icon
              color='orange'
              
              icon="search"
              inverted             
            />             
          </Menu.Item>                 
          <Menu.Item name='login' position="right" style={{cursor: 'pointer'}} onClick={this.props.signInCallback}>Login</Menu.Item>
        </Menu>
    );
  }
}

export default Header;
