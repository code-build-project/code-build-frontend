import axios from 'axios';
import router from '@/router';
import storage from '@/helpers/storage';
import { createNotification } from '@/helpers/notification';

const token = storage.getTokens('local').token;

const request = axios.create({
    // baseURL: 'https://guarded-springs-38118.herokuapp.com/',
    // baseURL: process.env.VUE_APP_API_BASE_URL,
    baseURL: 'http://127.0.1.1:5000/'
});

request.interceptors.response.use(
    response => response,
    err => {
        const { status, data } = err.response;
        
        if (status === 500) {
            createNotification({
                text: data.message,
                status: 'error'
            });
        }

        throw err.response;
    }
);

const requestAccess = axios.create({
    // baseURL: 'https://guarded-springs-38118.herokuapp.com/',
    baseURL: 'http://127.0.1.1:5000/',
    headers: {
        Authorization: token ? token.substring(7) : ''
    }
});

requestAccess.interceptors.response.use(
    response => response,
    err => {
        const { status, data } = err.response;

        if (status === 401 && data.name === 'TokenExpiredError') {
            storage.clearTokens('local');
            router.push('/').then(() => location.reload());
        } else if (status !== 401 && data.name !== 'JsonWebTokenError') {
            createNotification({
                text: data.message,
                status: 'error'
            });

            throw err;
        }
    }
);

export default request;
export { request, requestAccess };