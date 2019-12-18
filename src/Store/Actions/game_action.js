export function fetchGames() {
  return (dispatch) => {
    return fetch(`http://localhost:3001/games`)
    .then(response => response.json())
    .then((data) => dispatch({type: "FETCH_GAMES", payload: data}))
  }
}


export const addGame = (newGame) => {
  return {
    type: "ADD_GAME",
    payload: newGame
  }
}
