const initialState = {
  user: ""
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "CURRENT_USER":
    return {...state, user: action.payload}


    case "DELETE_USER":
    return {...state, user: ""}


    default:
    return state;
  }
}


export default reducer;
