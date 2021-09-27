import axios from 'axios';

const request = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL: 'http://127.0.1.1:5000/',
  headers: {
    Authorization: localStorage.token.substring(7)
  }
});

export default request;