var buffer = require('buffer');

class AuthService {
  login(credentials, callbackF){

    var b = new buffer.Buffer(credentials.username + ':' + credentials.password);
    var encodedAuth = b.toString('base64');

    fetch('https://api.github.com/user', {
      headers: {
        'Authorization' : 'Basic ' + encodedAuth
      }
    })
    .then((response)=> {
      console.log(response);
      if(response.status >= 200 && response.status <= 300){
        return(response);
      }
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
    })
    .catch((error)=> {
      return callbackF(error);
    });
  }
}

module.exports = new AuthService();
