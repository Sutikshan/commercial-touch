import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import SuperAdmin from './SuperAdmin.js';
// import PropertyDetails from './PropertyDetail.js';


class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SuperAdmin" component={SuperAdmin} />
        {/* <Route path="/PropertyDetail" component={PropertyDetails} /> */}
      </Switch>
    );
  }
}

export default App;
