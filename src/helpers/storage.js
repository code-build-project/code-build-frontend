export default {
    getTokens: () => ({
        token: localStorage.getItem('token'),
        // refreshToken: localStorage.getItem('refreshToken')
    }),

    setTokens: params => {
        localStorage.setItem('token', params.token);
        // localStorage.setItem('refreshToken', params.refreshToken);
    },

    clearTokens: () => {
        localStorage.setItem('token', '');
        // localStorage.setItem('refreshToken', '');
    },

    getLikes: field => (localStorage.getItem('likes-' + field)),

    setLikes: params => {
        localStorage.setItem('likes-' + params.field, params.likes);
    },
};