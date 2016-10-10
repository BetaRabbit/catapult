import React, { Component } from 'react';

import { REDIRECT_URL } from '../../constants/auth';
import { podio } from '../../utils/podio';

export default class AuthPopup extends Component {
  componentDidMount() {
    podio.isAuthenticated().then(() => {
      window.close();
    }).catch(e => {
      console.error(e);
      window.location = podio.getAuthorizationURL(REDIRECT_URL);
    });
  }

  render() {
    return <div>No Content!</div>
  }
}
