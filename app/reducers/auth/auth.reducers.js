import _ from 'lodash'

var initialState = {
  loggedIn: false,
}


export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case "LOGGED_IN":
      return{
        ...state,
        loggedIn: true
      }
  }
  return state
}
