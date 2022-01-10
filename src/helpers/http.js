import axios from 'axios';
import storage from '@/helpers/storage';
import { createNotification } from '@/helpers/notification';

const token = storage.getTokens('local').token;

const request = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL: 'http://127.0.1.1:5000/'
});

const requestAccess = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL: 'http://127.0.1.1:5000/',
  headers: {
    Authorization: token ? token.substring(7) : ''
  }
});

request.interceptors.response.use(
  response => response,
  err => {
    createNotification({
      text: err.response.data.message,
      status: 'error'
    });
    
    throw err;
  }
);

export default request;
export { request, requestAccess };