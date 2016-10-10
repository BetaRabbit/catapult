import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { login } from '../../apis/auth';

class App extends Component {
  componentDidMount() {
    window.addEventListener('message', this.handleAuthCompleted, false);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleAuthCompleted);
  }

  handleAuthCompleted = event => {
    const { sessionStore } = this.props;
    sessionStore.setAuth(event.data);
  };

  render() {
    const { sessionStore } = this.props;

    return (
      <div className="App">
        {sessionStore.auth ? <div>logged in</div> :
          <button onClick={login}>login</button>}
      </div>
    );
  }
}

export default inject(
  'sessionStore'
)(observer(App));
