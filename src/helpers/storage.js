export default {
  getTokens: type => ({
    token: window[`${type}Storage`].token,
    // refreshToken: window[`${type}Storage`].refreshToken
  }),

  setTokens: (type, params) => {
    window[`${type}Storage`].token = params.token;
    // window[`${type}Storage`].refreshToken = params.refreshToken;
  },

  clearTokens: type => {
    window[`${type}Storage`].token = '';
    // window[`${type}Storage`].refreshToken = '';
  }
};