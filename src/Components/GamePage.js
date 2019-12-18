import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../Store/Actions/game_action';
import GameContainer from '../Containers/GameContainer'



class GamePage extends Component {

  componentDidMount(){
    this.props.fetchGames()
  }

  mapGames = () => {
    return (this.props.vrGames.allGames ? <GameContainer game={this.props.vrGames.allGames} /> : null )
  }

  render() {
    return (
      <div className="games-collections-title">
        <h4 className="deep-purple-text">CHECK OUT OUR COLLECTION OF GAMES</h4>
        {this.mapGames()}
      </div>
    )
  }
}


const mapStateToProps = ({games}) => {
  return {
    vrGames: games
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: () => dispatch(fetchGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
