import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home/Home'
import LoginContainer from './Login/LoginContainer'
import HeaderContainer from './Header/HeaderContainer'
import SuperAdmin from './SuperAdmin/SuperAdmin'
import AdminListContainer from './SuperAdmin/AdminListContainer'
import RegisterAdminContainer from './SuperAdmin/RegisterAdminContainer'
import BuilderList from './SuperAdmin/BuilderList'
import AgentList from './SuperAdmin/AgentList'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <div style={{
          marginTop: '7em'
        }}></div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Login" component={LoginContainer}/>
          <Route exact path="/SuperAdmin" component={SuperAdmin}/>
          <Route
            exact
            path="/SuperAdmin/AdminList"
            component={AdminListContainer}></Route>
          <Route exact path="/SuperAdmin/Builders" component={BuilderList}></Route>
          <Route exact path="/SuperAdmin/Agents" component={AgentList}></Route>
          <Route exact path="/SuperAdmin/RegisterAdmin" component={RegisterAdminContainer}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
