import React from "react";
import { MDBBtn } from "mdbreact";
import GamePage from '../Components/GamePage';

export default class GameButton extends React.Component {



  render(){
    return(
      <div className="button-container">
       <div className="flex-button">
        <MDBBtn color="primary" onClick= <GamePage/>>Click Here to check out our Games Collection</MDBBtn>
       </div>
      </div>
    )
  }
}
