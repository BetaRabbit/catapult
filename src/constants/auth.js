export const IS_DEV = process.env.NODE_ENV === 'development';

export const AUTH_TYPE = 'client';
export const CLIENT_ID = IS_DEV ? 'test-7k47ez' : '';
export const CLIENT_SECRET = IS_DEV ?
  '9TibtoG2vFrfoZPVNcFUsTw8dCul8qgEJdedpJbtJn2qooMyvs4qdUOjrT2qXfSk' : '';
export const REDIRECT_URL = IS_DEV ?
  'http://10.157.14.136:3000/auth-popup' : '';
