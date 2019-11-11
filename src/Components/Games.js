import React, { Component } from 'react';


class GamesContainer extends Component {


  mapGame = () => {
    return this.props.game.map(game => {
      return <div><h3>{game.name}<h3><div>
    })
  }


  render(){
    return (
      <div>{this.mapGame()}<div>
    )
  }
}
