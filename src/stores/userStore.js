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

  getUserProfile = action('get-user-profile', () => {
    const { profile } = this;

    profile.loading = true;

    userApi.getUserProfile()
      .then(action('get-user-profile-success', data => {
        profile.data = data;
        profile.loading = false;
        profile.error = null;
      }))
      .catch(action('get-user-profile-failure', e => {
        profile.data = null;
        profile.loading = false;
        profile.error = e;
      }));
  });
}

export default new UserStore();
