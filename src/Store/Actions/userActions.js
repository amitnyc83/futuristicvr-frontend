export const currentUser = (theuser) => {
  return {
    type: "CURRENT_USER",
    payload: theuser
  }
}
