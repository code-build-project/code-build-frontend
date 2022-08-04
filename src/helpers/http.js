import axios from 'axios';
import router from '@/router';
import storage from '@/helpers/storage';
import { createNotification } from '@/helpers/notification';

const { token } = storage.getTokens();
const VUE_APP_API_BASE_URL = 'http://92.53.104.29/';

const request = axios.create({
    baseURL: VUE_APP_API_BASE_URL
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
    baseURL: VUE_APP_API_BASE_URL,
    headers: {
        'Authorization': token ? token.substring(7) : '',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
    }
});

requestAccess.interceptors.response.use(
    response => response,
    err => {
        const { status, data } = err.response;

        if (data.name === 'TokenExpiredError') {
            storage.clearTokens();
            router.push('/').then(() => location.reload());
        } else {
            if (status === 500) {
                createNotification({
                    text: data.message,
                    status: 'error'
                });
            }

            throw err.response;
        }
    }
);

export default request;
export { request, requestAccess };