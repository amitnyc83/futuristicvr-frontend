import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualGamePage from '../Components/IndividualGamePage';
import { MDBContainer, MDBRow, MDBCol, MDBCardGroup, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';


class GameContainer extends Component {

  style = {
    display: "inline-block",
    padding: "5px",
    width: "22rem"
  }

  mapGame = () => {
    return this.props.game.map(game => {
      return (
        <MDBCol style={this.style} key={game.id}>
          <MDBCard>
            <MDBCardImage className="img-fluid" src={game.image} waves alt={game.name} />
            <MDBCardBody className='elegant-color white-text rounded-bottom'>
              <MDBCardTitle>{game.name}</MDBCardTitle>
              <hr className='hr-light' />
              <MDBCardText className='white-text'>
                {game.description}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      )
    })
  }






  render(){
   return (
     <div>
        {this.mapGame()}
      </div>
    )
  }
}



export default GameContainer;
