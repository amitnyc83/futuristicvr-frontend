import React, { Component } from 'react';

export default class GameContainer extends Component {

  mapGame = () => {
    return this.props.game.map(game => {
      return <div><h3>{game.name}</h3><h3>{game.description}</h3></div>
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
