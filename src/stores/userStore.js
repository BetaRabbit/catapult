import { extendObservable, action } from 'mobx';

import * as userApi from '../apis/user';

class UserStore {
  constructor() {
    extendObservable(this, {
      profile: {
        data: null,
        loading: false,
        error: null,
      }
    });
  }

  getUserStatus = action('get-user-status', () => {
    const { profile } = this;

    profile.loading = true;

    userApi.getUserStatus()
      .then(action('get-user-status-success', data => {
        profile.data = data.profile;
        profile.loading = false;
        profile.error = null;
      }))
      .catch(action('get-user-status-failure', e => {
        profile.data = null;
        profile.loading = false;
        profile.error = e;
      }));
  });
}

export default new UserStore();
