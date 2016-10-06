import { api } from 'podio-js';
import { AUTH_TYPE, CLIENT_ID } from '../constants/auth';
import sessionManager from '../utils/sessionManager';
import { login } from '../apis/auth';

export const podio = new api({
  authType: AUTH_TYPE,
  clientId: CLIENT_ID,
}, {
  sessionStore: sessionManager,
  onTokenWillRefresh: onTokenWillRefresh,
});

export function onTokenWillRefresh() {
  login();
}
