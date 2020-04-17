import React, { Component } from 'react';
import Pricing from '../Components/Pricing';
import GamePage from '../Components/GamePage';
import GameButton from '../Components/GameButton';
import VrGamingPicture from '../Containers/VrGamingPicture';
import {  MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer } from "mdbreact";



class HomePage extends Component {





 render() {
   return(
     <div>
       <MDBView src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thestar.com%2Fcontent%2Fdam%2Fthestar%2Fbusiness%2F2017%2F05%2F11%2Fhouse-of-vr-makes-new-technology-a-reality%2Fhouse-of-vr.jpg&f=1&nofb=1`}>
          <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h2 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-3 pt-3 ">COME SEE THE FUTURE!</h2>
                  <hr className="hr-light my-4" />
                  <h3 className="text-uppercase mb-8 white-text "><strong>FUTURISTIC VR</strong></h3>
                  <MDBBtn outline color="white">BUY TICKETS</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
       <Pricing />
       <VrGamingPicture />
     </div>
   )
 }
}






export default HomePage;
