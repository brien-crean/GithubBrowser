import buffer from 'buffer'

export function login(credentials, callbackF) {
  return (dispatch, getState) => {
    var b = new buffer.Buffer(credentials.username + ':' + credentials.password);
    var encodedAuth = b.toString('base64');

    dispatch({ type: "LOGIN_REQUEST" })

    fetch('https://api.github.com/user', { headers: { 'Authorization' : 'Basic ' + encodedAuth} })
    .then((response)=> {
      console.log(response);
      if(response.status >= 200 && response.status <= 300) return(response)
      throw{
        badCredentials: response.status == 401,
        unknownError: response.status != 401
      }
    })
    .then((response)=> {
      return response.json();
    })
    .then((results)=> {
      return callbackF({success: true});
          dispatch({ type: "LOGGED_IN" })
    })
    .catch((error)=> {
      return callbackF(error);
    });
  }
}

export function getRepos(){
  return (dispatch, getState) => {

    dispatch({type: "GET_REPOS"})

    fetch("https://api.github.com/users/brien-crean/repos")
    .then((response)=> response.json())
    .then((json)=> console.log(json))
    .catch(err => console.log(err))
  }
}
