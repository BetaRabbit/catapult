import sessionStore from '../stores/sessionStore';

class SessionManager {
  get = (authType, callback) => {
    const auth = localStorage.getItem('PodioOAuth');

    callback(auth ? JSON.parse(auth) : {});
  };

  set = (auth, authType) => {
    localStorage.setItem('PodioOAuth', JSON.stringify(auth));
    location.hash = '';

    // save auth object in main window
    if (window.opener) {
      window.opener.postMessage(auth, window.opener.location.origin);
    } else {
      sessionStore.setAuth(auth);
    }
  };
}

export default new SessionManager();
