import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

class SignUpPage extends Component {
  state = {
    user: {
      username: '',
      password: '',
      email: '',
      name: '',
      type: ''
    }
  };


  signUpHandleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  signUphandleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: this.state.user
      })
    }).then(resp => resp.json())
    .then(user => {
      if (user.error !== "ACCOUNT NOT FOUND"){
        this.props.currentUser(user)
        localStorage.setItem('token', user.jwt)
        if(user.type === "Customer"){
          this.props.history.push("/games")
        }
        else if ( user.type === "Admin" ){
          this.props.history.push("/admin")
        }
        else {
          const noUser = ""
          this.props.currentUser(noUser)
        }
      }
    })
  }




  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
         <MDBCard
           className='card-image'
           style={{
             backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
             width: '28rem'
            }}
            >
            <MDBCardBody>
              <form onSubmit={this.signUphandleSubmit}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="First & Last Name "
                    icon="user"
                    group
                    type="text"
                    name="name"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.signUpHandleChange}
                    value={this.state.value}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    name="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.signUpHandleChange}
                    value={this.state.value}
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    name="password"
                    validate
                    onChange={this.signUpHandleChange}
                    value={this.state.value}
                  />
                  <MDBInput
                    label="Username"
                    icon="user"
                    group
                    type="text"
                    name="username"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.signUpHandleChange}
                    value={this.state.value}
                  />
                  <select onChange={this.signUpHandleChange} name="type" className="browser-default custom-select">
                   <option value="">Account Type</option>
                   <option  value="Customer">Customer</option>
                   <option  value="Admin">Admin</option>
                  </select>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (theuser) => {dispatch({type: "CURRENT_USER", payload: theuser})},
  }
}

export default withRouter(connect(null, mapDispatchToProps)(SignUpPage));
