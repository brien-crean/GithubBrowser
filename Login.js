'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

var Login = React.createClass({
  render: function(){
    return(
      <View style={styles.container}>
        <Image style={styles.logo} source={require('image!logo')}/>
        <Text style={styles.heading}>
          Github Browser
        </Text>
        <TextInput style={styles.input} placeholder="Github username"/>
        <TextInput style={styles.input} placeholder="Github password" secureTextEntry={true}/>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Log In
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

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
  }
});
module.exports = Login;
