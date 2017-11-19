import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const itemClass = {
    cursor: 'pointer'
};

const activeItemClass = {
    cursor: 'pointer', 
    backgroundColor: 'orange'    
};

class SuperAdminHeader extends Component {
   
  render() {
    return (
        <Menu pointing attached="top" style={{
          fontSize: "1.5rem"
        }}>
            <Menu.Item color="blue" header>
                Commercial Touch
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item name='admins' style={
                    this.props.history.location.pathname === '/SuperAdmin/Admins' ? activeItemClass : itemClass
                }>
                    <Link to='/SuperAdmin/Admins'>Admins</Link>
                </Menu.Item>
                <Menu.Item name='plans' style={
                    this.props.history.location.pathname === '/SuperAdmin/Plans' ? activeItemClass : itemClass
                }>
                    <Link to='/SuperAdmin/Plans'>Plans</Link>
                </Menu.Item>
                <Menu.Item name='builders' style={
                    this.props.history.location.pathname === '/SuperAdmin/Builders' ? activeItemClass : itemClass
                }>
                    <Link to='/SuperAdmin/Builders'>Builders</Link>
                </Menu.Item>
                <Menu.Item name='agents' style={
                    this.props.history.location.pathname === '/SuperAdmin/Agents' ? activeItemClass : itemClass 
                }>
                    <Link to='/SuperAdmin/Agents'>Agents</Link>
                </Menu.Item>
                <Menu.Item name='users' style={
                    this.props.history.location.pathname === '/SuperAdmin/Users' ? activeItemClass : itemClass 
                }>
                    <Link to='/SuperAdmin/Users'>Users</Link>
                </Menu.Item>
                <Menu.Item name='logout' style={{
                    cursor: 'pointer'
                }}>
                    <Link to='/'>Logout</Link>
                </Menu.Item >                
            </Menu.Menu>
        </Menu>
    );
  }
}
export default SuperAdminHeader;
