import React, { Component } from 'react';
import HomePage from '../src/Components/HomePage';
import GamePage from '../src/Components/GamePage';
import LoginPage from '../src/Components/LoginPage';
import SignUpPage from '../src/Components/SignUpPage';
import NavBar from '../src/Components/NavBar';
import AdminPage from '../src/Components/AdminPage';
import HoursOfOperation from '../src/Components/HoursOfOperation';
import Pricing from '../src/Components/Pricing';
import ContactUs from '../src/Components/ContactUs';
import Footer from '../src/Components/Footer';
import Careers from '../src/Containers/Careers';
import './App.css';
import { Switch, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';




class App extends Component {

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(`http://localhost:3001/current_user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      }).then(response => response.json())
      .then(resp => {
        this.props.currentUser(resp)
        if(resp.type === "Admin"){
          this.props.history.push("/admin")
        }
        else if (resp.type === "Customer"){
          this.props.history.push("/games")
        }
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/login" exact render={(renderProps) => (<LoginPage renderProps={renderProps}/> )} />
          <Route path="/signup" exact render={(renderProps) => (<SignUpPage renderProps={renderProps}/> )} />
          <Route path="/" exact render={() => (<HomePage />)} />
          <Route path="/hours" exact render={() => (<HoursOfOperation />)} />
          <Route path="/careers" exact render={() => (<Careers />)} />
          <Route path="/games" exact render={(renderProps) => (<GamePage renderProps={renderProps}/> )} />
          <Route path="/pricing" exact render={() => (<Pricing /> )} />
          <Route path="/contact" exact render={() => (<ContactUs /> )} />
          <Route path="/admin" exact render={() => (<AdminPage />)} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (theuser) => {dispatch({type: "CURRENT_USER", payload: theuser})},
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
