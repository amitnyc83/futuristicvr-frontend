import React, { Component } from 'react';
import HomePage from '../src/Components/HomePage';
import Games from '../src/Components/Games';
import LoginPage from '../src/Components/LoginPage';
import SignUpPage from '../src/Components/SignUpPage';
import NavBar from '../src/Components/NavBar';
import AdminPage from '../src/Components/AdminPage';
import HoursOfOperation from '../src/Components/HoursOfOperation';
import Footer from '../src/Components/Footer';
import './App.css';
import { Switch, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/login" exact render={(renderProps) => (<LoginPage renderProps={renderProps}/> )} />
          <Route path="/signup" exact render={(renderProps) => (<SignUpPage renderProps={renderProps}/> )} />
          <Route path="/" exact render={() => (<HomePage />)} />
          <Route path="/admin" exact render={() => (<AdminPage />)} />
          <Route path="/hours" exact render={() => (<HoursOfOperation />)} />
          <Route path="/games" exact render={(renderProps) => (<Games renderProps={renderProps}/> )} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(App);
