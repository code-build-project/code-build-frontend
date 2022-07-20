export default  {
    namespaced: true,

    state: {
        isAlert: false,
        message: ''
    },

    mutations: {
        set(state, payload) {
            state.isAlert = true;
            state.message = payload.message;
        },

        close(state) {
            state.isAlert = false;
            state.message = '';
        },
    }
}