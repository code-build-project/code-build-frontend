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

    // Флаг для проверки того, нужно ли после перезагрузки страницы, перекинуть на главную страницу
    // Как пример: Авторизация, Выходи из учетки и тд.
    getNeedGoToHome: () => (localStorage.getItem('needGoToHome') === 'true'),

    setNeedGoToHome: value => { localStorage.setItem('needGoToHome', value) },
};