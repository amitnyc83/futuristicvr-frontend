export const currentUser = (theuser) => {
  return {
    type: "CURRENT_USER",
    payload: theuser
  }
}


export const deleteUser = () => {
  return {
    type: "CURRENT_USER",
    payload: ""
  }
}
