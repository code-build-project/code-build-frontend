export default {
  getTokens: type => ({
    token: window[`${type}Storage`].token
    // refreshToken: window[`${type}Storage`].refreshToken
  }),

  setTokens: (type, params) => {
    window[`${type}Storage`].token = params.token;
    // window[`${type}Storage`].refreshToken = params.refreshToken;
  },

  clearTokens: type => {
    window[`${type}Storage`].token = '';
    // window[`${type}Storage`].refreshToken = '';
  },

  getUser: type => {
    const user = window[`${type}Storage`].user;
    if (user) return JSON.parse(window[`${type}Storage`].user);
    return {};
  },

  setUser: (type, user) => {
    window[`${type}Storage`].user = JSON.stringify(user);
  }
};