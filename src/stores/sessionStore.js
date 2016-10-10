import { extendObservable, action } from 'mobx';

class SessionStore {
  constructor() {
    extendObservable(this, {
      auth: null,
    });
  }

  setAuth = action('set-auth', (auth) => {
    this.auth = auth;
  });
}

export default new SessionStore();
