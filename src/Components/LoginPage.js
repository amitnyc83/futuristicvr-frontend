import React, { Component } from "react";
import { currentUser } from '../Store/Actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

class LoginPage extends Component {

  state = {
    user: {
      email: '',
      password: ''
    }
  }


  signInHandleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  signInHandleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/login`,{
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({
        user: this.state.user
      })
    }).then(response => response.json())
    .then(resp => {
      if(resp.jwt){
        this.props.currentUser(resp)
        localStorage.setItem('token', resp.jwt)
        if (resp.type === "Customer"){
          this.props.history.push("/games")
        }
        else if (resp.type === "Admin"){
          this.props.history.push("/admin")
        }
      }
    })
  }





  render(){
    return (
      <MDBContainer >
        <MDBRow>
          <MDBCol md="6">
           <MDBCard >
             <MDBCardBody>
               <form onSubmit={(e) => this.signInHandleSubmit(e)}>
                 <p className="h4 text-center py-4">Sign In</p>
                  <div className="grey-text">
                   <MDBInput
                     label="Your email"
                     group
                     type="email"
                     name="email"
                     validate
                     error="wrong"
                     success="right"
                     onChange={this.signInHandleChange}
                     value={this.state.value}
                    />
                    <MDBInput
                     label="Your password"
                     group
                     type="password"
                     name="password"
                     validate
                     containerClass="mb-0"
                     onChange={this.signInHandleChange}
                     value={this.state.value}
                    />
                    <div className="text-center py-4 mt-3">
                      <MDBBtn
                        type="submit"
                        gradient="blue"
                        rounded
                      >
                        Sign in
                      </MDBBtn>
                    </div>
                    <p className="h6 grey darken-4 text-right d-flex justify-content-center mb-3 pt-6">
                      or Sign in with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center">
                      <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="mr-md-3 z-depth-1a"
                      >
                        <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="z-depth-1a"
                      >
                        <MDBIcon fab icon="google-plus-g" className="blue-text" />
                      </MDBBtn>
                    </div>
                  </div>
                </form>
             </MDBCardBody>
             <MDBModalFooter className="mx-5 pt-3 mb-1">
               <p className="font-small grey-text d-flex justify-content-end">
                 Not a member?
                 <a href="/signup" className="blue-text ml-1">
                   Sign Up
                 </a>
               </p>
             </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (theuser) => {dispatch({type: "CURRENT_USER", payload: theuser})}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
