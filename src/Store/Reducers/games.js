const initialState = {
  allGames: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "FETCH_GAMES":
    const fetchedGames = action.payload
    return {allGames: fetchedGames}


    default:
    return state
  }
}


export default reducer;
