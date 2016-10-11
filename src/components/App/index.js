import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { podio } from '../../utils/podio';
import sessionManager from '../../utils/sessionManager';
import { AUTH_TYPE } from '../../constants/auth';
import { login } from '../../apis/auth';

class App extends Component {
  componentDidMount() {
    const { sessionStore, userStore } = this.props;

    // if user already logged in, retain auth object from session manager
    podio.isAuthenticated().then(() => {
      sessionManager.get(AUTH_TYPE, auth => sessionStore.setAuth(auth));
      userStore.getUserProfile();
    }).catch(e => console.log('unauthenticated'));

    window.addEventListener('message', this.handleAuthCompleted, false);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleAuthCompleted);
  }

  handleAuthCompleted = event => {
    const { sessionStore, userStore } = this.props;

    podio.refreshAuthFromStore(() =>
      sessionStore.setAuth(event.data)
    );

    userStore.getUserProfile();
  };

  renderUser() {
    const { profile } = this.props.userStore;

    if (profile.loading) {
      return <div>Loading...</div>;
    }

    if (profile.error) {
      return <div>{profile.error.message.error_description}</div>;
    }

    if (profile.data) {
      return <div>{profile.data.name}</div>;
    }

    return <div>...</div>;
  }

  render() {
    const { sessionStore } = this.props;

    return (
      <div className="App">
        {sessionStore.auth ? this.renderUser() :
          <button onClick={login}>login</button>}
      </div>
    );
  }
}

export default inject(
  'sessionStore',
  'userStore'
)(observer(App));
