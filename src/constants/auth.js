export const IS_DEV = process.env.NODE_ENV !== 'production' &&
  process.env.REACT_APP_ENV_TEST !== 'true';

export const AUTH_TYPE = 'client';

export const CLIENT_ID = IS_DEV ?
  'localhost-test-7epwwz' : process.env.REACT_APP_CLIENT_ID;

export const CLIENT_SECRET = IS_DEV ?
  'Ow3wd80FBYbxODnOrQk0onfXRqyJ0CsQI4bbUE8Bs8UANLbrRShDKJpM8Qp5HzTx' :
  process.env.REACT_APP_CLIENT_SECRET;

export const REDIRECT_URL = IS_DEV ?
  'http://localhost:3000/auth-popup' :
  `http://${process.env.REACT_APP_HOST}/auth-popup`;
