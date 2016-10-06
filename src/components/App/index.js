import React, { Component } from 'react';

import { podio } from '../../utils/podio';
import { login } from '../../apis/auth';

export default class App extends Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    podio.isAuthenticated()
      .then(() => {this.setState({loggedIn: true}); console.log('login in')})
      .catch(() => console.log('error'))
  }

  render() {
    return (
      <div className="App">
        <a onClick={login}>login</a>
        {this.state.loggedIn ? <div>logged in</div> : null}
      </div>
    );
  }
}
