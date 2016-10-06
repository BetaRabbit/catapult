class SessionManager {
  get = (authType, callback) => {
    const auth = localStorage.getItem('PodioOAuth');

    callback(auth ? JSON.parse(auth) : {})
  };

  set = (auth, authType) => {
    localStorage.setItem('PodioOAuth', JSON.stringify(auth));
  };
}

export default new SessionManager();
