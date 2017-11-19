import React, {Component} from 'react';
import Axios from 'axios'
import {connect} from 'react-redux'
import {logInUser} from './LoginActions'
import Login from './Login.jsx'
import LoginInitialState from './LoginInitialState'

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = LoginInitialState;
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
        this.handleLoginClick = this
            .handleLoginClick
            .bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLoginClick() {
        var self = this;
        Axios
            .post("http://localhost:8000/oapi/v1/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(function (response) {
                self
                    .props
                    .dispatch(logInUser(response.data.user));
                self
                    .props
                    .history
                    .push('/SuperAdmin');
            })
            .catch(function (error) {
            });
    };

    render() {
        return (<Login
            user={this.state}
            handleInputChange={this.handleInputChange}
            handleLoginClick={this.handleLoginClick}/>);
    }
}

export default connect()(LoginContainer)