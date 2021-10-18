export function wrapAsync(dispatch,getState) {
  return function(action) {
    if (action instanceof Function) {
      return action(dispatch,getState)
    }
    return dispatch(action)
  }
}