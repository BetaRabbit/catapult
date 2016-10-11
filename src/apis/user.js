import { podio } from '../utils/podio';

const USER_STATUS_URL = '/user/status';

export function getUserStatus() {
  return podio.request('get', USER_STATUS_URL);
}
