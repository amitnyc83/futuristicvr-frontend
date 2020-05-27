import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../Store/Actions/userActions'

class NavBar extends Component {
 state = {
   isOpen: false
  };

  deleteToken = () => {
   localStorage.removeItem('token')
   this.props.deleteUser()
  }

  toggleCollapse = () => {
   this.setState({ isOpen: !this.state.isOpen });
  }

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">FuturisticVR</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/games">Games</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/pricing">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/events">Events</MDBNavLink>
            </MDBNavItem>
            {this.props.currentUser.type === "Customer" ? <MDBNavItem><MDBNavLink to="/reservations">{this.props.currentUser.username} Reservations</MDBNavLink></MDBNavItem> : null}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">About</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/faq">FAQ</MDBDropdownItem>
                  <MDBDropdownItem href="/hours">LOCATION & HOURS</MDBDropdownItem>
                  <MDBDropdownItem href="/contactUs">CONTACT US</MDBDropdownItem>
                  <MDBDropdownItem href="careers">CAREERS</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/login">LogIn</MDBDropdownItem>
                  <MDBDropdownItem href="/signup">SignUp</MDBDropdownItem>
                  {this.props.currentUser ? <MDBDropdownItem href="/" onClick={this.deleteToken}>LogOut</MDBDropdownItem> : null }
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: () => dispatch({type: "DELETE_USER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
