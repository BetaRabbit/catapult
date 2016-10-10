import { podio } from '../utils/podio';

const USER_PROFILE_URL = '/user/profile';

export function getUserProfile() {
  return podio.request('get', USER_PROFILE_URL);
}
