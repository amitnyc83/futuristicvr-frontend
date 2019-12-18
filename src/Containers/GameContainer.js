import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class GameContainer extends Component {

  mapGames = () => {
    return this.props.game.map(game => {
      return (
        <div className="flex-container" key={game.id}>
        <MDBCol>
         <MDBCard style={{ width: "22rem", display: "flex"}}>
           <MDBCardImage className="img-fluid" src={game.image} waves alt={game.name} />
           <MDBCardBody>
             <MDBCardTitle>{game.name}</MDBCardTitle>
             <MDBCardText>
               {game.description}
             </MDBCardText>
           </MDBCardBody>
         </MDBCard>
        </MDBCol>
        </div>
      )
    })
  }




 render() {
   return (
     <div>
       {this.mapGames()}
     </div>
    )
  }
}



export default GameContainer
