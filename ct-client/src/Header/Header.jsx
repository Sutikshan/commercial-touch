import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const RightSideLinks = ({loggedInUser, onLogOutClick, onAdminsClick, onSuperAdminHomeClick, onBuildersClick, onAgentsClick}) => {
    if (loggedInUser) {
        return (
            <Menu.Menu position='right'>
                <Menu.Item
                    name='home'
                    style={{
                    cursor: 'pointer'
                }}
                    onClick={onSuperAdminHomeClick}>Home</Menu.Item>
                <Menu.Item
                    name='admins'
                    style={{
                    cursor: 'pointer'
                }}
                    onClick={onAdminsClick}>Admins</Menu.Item>
                <Menu.Item
                    name='builders'
                    style={{
                    cursor: 'pointer'
                }}
                    onClick={onBuildersClick}>Builders</Menu.Item>
                <Menu.Item
                    name='agents'
                    style={{
                    cursor: 'pointer'
                }}
                    onClick={onAgentsClick}>Agents</Menu.Item>                    
                <Menu.Item
                    name='login'
                    style={{
                    cursor: 'pointer'
                }}
                    onClick={onLogOutClick}>Logout</Menu.Item>
            </Menu.Menu>

        );
    } else {
        return (
            <Menu.Item
                name='login'
                position="right"
                style={{
                cursor: 'pointer'
            }}>
                <Link to="/Login">Login</Link>
            </Menu.Item>
        );
    }
}

const Header = ({loggedInUser, onLogOutClick, onAdminsClick, onSuperAdminHomeClick, onBuildersClick, onAgentsClick}) => {

    return (
        <Menu
            fixed="top"
            style={{
            fontSize: "1.5rem"
        }}
            color="red">
            <Menu.Item color="blue" header>
                <Link to="/">Commercial Touch</Link>
            </Menu.Item>
            <RightSideLinks
                loggedInUser={loggedInUser}
                onLogOutClick={onLogOutClick}
                onAdminsClick={onAdminsClick}
                onSuperAdminHomeClick={onSuperAdminHomeClick}
                onBuildersClick={onBuildersClick}
                onAgentsClick={onAgentsClick}/>
        </Menu>
    )
}
export default Header
