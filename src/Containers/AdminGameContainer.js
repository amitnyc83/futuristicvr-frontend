import React, { Component } from 'react';
import AddGame from '../Components/AddGame';
import { connect } from 'react-redux';
import { MDBBtn } from "mdbreact";


class AdminGameContainer extends Component {

  state = {
    name: null,
    description: null,
  }

  handleChange = (event, gameInfo) => {
    this.setState({
      name: gameInfo.name,
      description: gameInfo.description
    })
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdateSubmit = (event, game) => {
    event.preventDefault()
    fetch(`http://localhost:3001/games/${game.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application-json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description
      })
    }).then(resp => resp.json())
    .then(resp => console.log(resp))
  }

  deleteGame = (event, game) => {
    event.preventDefault()
    this.props.adminDeleteGame(game)
    fetch(`http://localhost:3001/games/${game.id}`, {
      method: "DELETE"
    }).then(response => response.json())
    .then(resp => console.log(resp))
  }

  adminsGames = () => {
    return this.props.game.filter(game => {
      return game["admin_id"] === this.props.currentUser["user_id"]
    }).map(gameInfo => {
      return <div>
        <form onSubmit={(event) => this.handleUpdateSubmit(event, gameInfo)} class="add-product-form">
          <label>Name</label>
          <input name="name" type="text" onChange={(event) => this.handleChange(event, gameInfo)} placeholder={gameInfo.name} value={this.state.value}/>
          <br></br>
          <img src={gameInfo.image} />
          <br></br>
          <label>Description</label>
          <input name="description" type="textbox" onChange={(event) => this.handleChange(event, gameInfo)} placeholder={gameInfo.decsription} value={this.state.value}/>
          <br></br>
          <MDBBtn gradient="blue">Update Game</MDBBtn>
        </form>
        <div>
          <img src={gameInfo.image} />
          <MDBBtn gradient="blue" onClick={(event) => this.deleteGame(event, gameInfo)}>Delete Game</MDBBtn>
        </div>
      </div>
    })
  }

  render() {
    return(
      <React.Fragment>
        <AddGame />
        {this.adminsGames()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    currentUser: user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteGame: (deleteGame) => dispatch({
      type: "DELETE_GAME",
      payload: deleteGame
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminGameContainer);
