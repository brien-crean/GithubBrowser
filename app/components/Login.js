import React, {Component} from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../reducers/rootAction';

class Login extends Component {

  // hide header for Login page
  static navigationOptions = {
    header: {
     visible: false,
    },
  };

  constructor(props){
    super(props)
    this.state = {
      showProgress: false,
      loggedIn: props.loggedIn
    }
  }

  render(){
    var errorCtrl = <View />

    if(!this.state.success && this.state.badCredentials){
      errorCtrl = <Text style={styles.error}>
        Username or password not valid
      </Text>
    }
    if(!this.state.success && this.state.unknownError){
      errorCtrl = <Text style={styles.error}>
        We experienced an unexpected issue
      </Text>
    }

    return(
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/github_logo.png')}/>
        <Text style={styles.heading}>
          Github Browser
        </Text>
        <TextInput style={styles.input} placeholder="Github username"
          onChangeText={(text)=> this.setState({username: text})}/>
        <TextInput style={styles.input} placeholder="Github password" secureTextEntry={true}
          onChangeText={(text)=> this.setState({password: text})}/>
        <TouchableHighlight style={styles.button} onPress={this.onLoginPressed.bind(this)}>
          <Text style={styles.buttonText}>
            Log In
          </Text>
        </TouchableHighlight>
        {errorCtrl}
        <ActivityIndicator animating={this.state.showProgress} size="large"
          style={styles.loader}/>
      </View>
    )
  }
  onLoginPressed(){
    this.props.login(
      { username: this.state.username, password: this.state.password
    }, (results)=> {
        this.setState(Object.assign({showProgress: false}, results))
        this.props.navigation.navigate('ProfileList')
    })
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 40,
    padding: 10,
    alignItems: 'center'
  },
  logo: {
    width: 72,
    height: 72
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  },
  input: {
    fontSize: 18,
    height: 50,
    alignSelf: 'stretch',
    marginTop: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 24
  },
  loader: {
    marginTop: 20
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginTop: 10
  }
})

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      login: actions.auth.login,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
