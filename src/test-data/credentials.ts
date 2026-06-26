import dotenv from 'dotenv';

dotenv.config();

export const webCredentials = {
  username: process.env.WEB_USERNAME ?? 'student',
  password: process.env.WEB_PASSWORD ?? 'Password123'
};

export const apiCredentials = {
  username: process.env.API_USERNAME ?? 'emilys',
  password: process.env.API_PASSWORD ?? 'emilyspass',
  expiresInMins: Number(process.env.API_EXPIRES_IN_MINS ?? '30')
};

export const apiConfig = {
  baseUrl: process.env.API_BASE_URL ?? 'https://dummyjson.com'
};
