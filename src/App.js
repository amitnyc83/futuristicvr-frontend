import React, { Component } from 'react';
import HomePage from '../src/Components/HomePage';
import Games from '../src/Components/Games';
import LoginForm from '../src/Components/LoginForm';
import SignUpForm from '../src/Components/SignUpForm';
import NavBar from '../src/Components/NavBar';
import HoursOfOperation from '../src/Components/HoursOfOperation';
import Footer from '../src/Components/Footer';
import './App.css';
import { Switch, withRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/login" exact render={(renderProps) => (<LoginForm renderProps={renderProps}/> )} />
          <Route path="/signup" exact render={(renderProps) => (<SignUpForm renderProps={renderProps}/> )} />
          <Route path="/" exact render={() => (<HomePage />)} />
          <Route path="/hours" exact render={() => (<HoursOfOperation />)} />
          <Route path="/games" exact render={(renderProps) => (<Games renderProps={renderProps}/> )} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(App);
