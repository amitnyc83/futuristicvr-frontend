import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../Store/Actions/game_action';
import AdminGameContainer from '../Containers/AdminGameContainer';
import { withRouter } from 'react-router-dom'




class AdminPage extends Component {


  componentDidMount(){
    let token = localStorage.getItem('token')
    if (token){
      fetch(`http://localhost:3001/currentuser`, {
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: token
        }
      }).then(response => response.json())
      .then(resp => {
        this.props.fetchGames()
      })
    } else {
      this.props.history.push('/login')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.vrGames.allGames.length !== this.props.vrGames.allGames.length) {
      this.props.fetchGames()
    }
  }

  mapGames = () => {
    return (this.props.vrGames.allGames ? <AdminGameContainer game={this.props.vrGames.allGames} /> : null )
  }


  render() {
    return (
      <React.Fragment>
        <div className="h1-responsive font-weight-bold text-center my-5 white-text">Welcome to Your Admin Page</div>
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
    fetchGames: () => dispatch(fetchGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
