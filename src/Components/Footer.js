import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <MDBFooter color="indigo" className="footer-copyright text-center py-3">
          <MDBContainer fluid>
          <h5 className="title">FuturisticVR</h5>
            &copy; {new Date().getFullYear()} FUTURISTICVR INC. ALL RIGHTS RESERVED
          </MDBContainer>
     </MDBFooter>
    </div>
  );
}

export default Footer;
