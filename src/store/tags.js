export default  {
    namespaced: true,

    state: {
        articles: [],
        courses: [],
    },

    mutations: {
        setArticleList(state, tags) {
            state.articles = tags;
        },

        setCourseList(state, tags) {
            state.courses = tags;
        }
    },

    actions: {
        async getArticleList({ commit, state }, vm) {
            if (!state.articles.length) {
                let tags = await vm.$service.articles.getTags();
                commit('setArticleList', tags);
            }
            
            return state.articles;
        },

        async getCourseList({ commit, state }, vm) {
            if (!state.courses.length) {
                let tags = await vm.$service.courses.getTags();
                commit('setCourseList', tags);
            }

            return state.courses;
        }
    },
}