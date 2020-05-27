import React from "react";


const Footer = () => {
  return (
      <div color="indigo" className="footer-container text-center py-1">
          <div className= "flex-footer">
          <h5 className="title">FuturisticVR</h5>
            &copy; {new Date().getFullYear()} FUTURISTICVR INC. ALL RIGHTS RESERVED
          </div>
     </div>
  );
}

export default Footer;
