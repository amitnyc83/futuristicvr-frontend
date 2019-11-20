const initialState = {
  user: ""
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "CURRENT_USER":
    return {...state, user: action.payload}


    default:
    return state;
  }
}


export default reducer;
