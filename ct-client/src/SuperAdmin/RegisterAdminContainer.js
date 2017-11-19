import React, {Component} from 'react';
import {connect} from 'react-redux'
import Axios from 'axios'
import RegisterAdmin from './RegisterAdmin.jsx'
import {addNewAdmin} from './SuperAdminActions'

class RegisterAdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                header: {
                    createdOn: new Date(),
                    createdBy: ""
                },
                body: {
                    name: "",
                    email: "",
                    countryCode: "+91",
                    mobile: undefined,
                    password: "",
                    userType: 2
                }                
            },
            confirmPassword: ""
        };
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
        this.handleCpasswordChange = this
            .handleCpasswordChange
            .bind(this);
        this.handleRegister = this
            .handleRegister
            .bind(this);
    };
    handleInputChange(event) {
        let user = this.state.user;
        user.body[event.target.name] = event.target.value;
        this.setState({user});
    };

    handleCpasswordChange(event) {
        let stateCopy = Object.assign({}, this.state);
        stateCopy.confirmPassword = event.target.value;
        this.setState(stateCopy);
    };

    handleRegister(event) {
        var self = this;
        let user = Object.assign({}, this.state.user);
        user.body.mobile = parseInt(user.body.mobile, 10);
        Axios
            .post("http://localhost:8000/oapi/v1/createUser", user)
            .then(function (response) {
                self
                    .props
                    .dispatch(addNewAdmin(response.data.newUser));
                //self.props
                // .history   .push('/SuperAdmin');
                self.setState({
                    user: {
                        header: {
                            createdOn: new Date(),
                            createdBy: ""
                        },
                        body: {
                            name: "",
                            email: "",
                            countryCode: "+91",
                            mobile: undefined,
                            password: "",
                            userType: 2
                        }                        
                    },
                    confirmPassword: ""
                });
            })
            .catch(function (error) {
                console.log("error - " + error.response.data.message);
            });
    };
    render() {
        return (<RegisterAdmin
            user={this.state.user}
            confirmPassword={this.state.confirmPassword}
            handleInputChange={this.handleInputChange}
            handleCpasswordChange={this.handleCpasswordChange}
            handleRegister={this.handleRegister}/>);
    }
}

export default connect()(RegisterAdminContainer)
