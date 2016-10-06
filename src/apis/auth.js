import { podio } from '../utils/podio';
import { REDIRECT_URL } from '../constants/auth';

export function login() {
  const dualScreenLeft = typeof screenLeft === 'number' ? screenLeft : screen.left;
  const dualScreenTop = typeof screenTop === 'number' ? screenTop : screen.top;
  const width = innerWidth ? innerWidth :
    document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = innerHeight ? innerHeight :
    document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  const left = ((width / 2) - (600 / 2)) + dualScreenLeft;
  const top = ((height / 2) - (800 / 2)) + dualScreenTop;

  const popup = window.open(podio.getAuthorizationURL(REDIRECT_URL),
    'Auth Popup',
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no,
      copyhistory=no, width=600, height=800, top=${top}, left=${left}`);

  popup.focus();
}

