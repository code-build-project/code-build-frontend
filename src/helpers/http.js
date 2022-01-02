import axios from 'axios';
import storage from '@/helpers/storage';

const token = storage.getTokens('local').token;

const request = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL: 'http://127.0.1.1:5000/',
});

const requestAccess = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL: 'http://127.0.1.1:5000/',
  headers: {
    Authorization: token ? token.substring(7) : ''
  }
});

export default request;
export { request, requestAccess };