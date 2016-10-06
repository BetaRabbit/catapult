import React, { Component } from 'react';
import { podio } from '../../utils/podio';

export default class AuthPopup extends Component {
  componentDidMount() {
    podio.isAuthenticated().then(() => {
      podio.refreshAuthFromStore();
    });

    window.close();
  }

  render() {
    return <div>You are logged in.</div>
  }
}
