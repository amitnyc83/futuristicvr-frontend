const initialState = {
  allGames: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "FETCH_GAMES":
    // const fetchedGames = action.payload
    return {allGames: action.payload}

    case "ADD_GAME":
    const newGame = action.payload
    return {allGames: [...state.allGames, newGame]}


    default:
    return state
  }
}


export default reducer;
