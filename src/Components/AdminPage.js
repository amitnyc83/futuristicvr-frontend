import React, { Component } from 'react';
import { connect } from 'react-redux';
import  GameContainer  from '../Containers/GameContainer'
import { fetchGames } from '../Store/Actions/game_action';



class AdminPage extends Component {


  componentDidMount() {
    this.props.fetchGames()
  }

  mapGames = () => {
    return (this.props.vrGames.allGamess ? <GameContainer game={this.props.vrGamess.allGames} /> : null )
  }


  render() {
    return (
      <React.Fragment>
        This AdminCentral!
        {this.mapGames()}
      </React.Fragment>
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
    fetchGames: () => (fetchGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
