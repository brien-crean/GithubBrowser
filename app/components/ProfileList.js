import React, {Component} from 'react'
import { Text } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../reducers/rootAction';

class ProfileList extends Component {

  componentDidMount() {
    this.props.getRepos()
  }

  render() {
    return (
      <Text>Profile</Text>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      login: actions.auth.login,
      getRepos: actions.auth.getRepos,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList)
