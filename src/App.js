import React, { Component } from 'react';
import Homepage from '../src/Components/Homepage';
import './App.css';
import { BrowserRouter as Router, Switch, withRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={() => (<Homepage />)} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
