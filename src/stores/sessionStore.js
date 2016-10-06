import { extendObservable, action } from 'mobx';

class SessionStore {
  constructor() {
    extendObservable(this, {
      auth: null,
      user: null,
    });
  }

  setAuth = action('set-auth', (auth) => {
    this.auth = auth;
  });

  setUser = action('set-user', (user) => {
    this.user = user;
  })
}

export default new SessionStore()
