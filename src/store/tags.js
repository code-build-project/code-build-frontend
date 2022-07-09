import Courses from '@/services/courses';
import Articles from '@/services/articles';

const apiCourses = new Courses();
const apiArticles = new Articles();

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
        async getArticleList({ commit, state }) {
            if (!state.articles.length) {
                let tags = await apiArticles.getTags();
                commit('setArticleList', tags);
            }
            
            return state.articles;
        },

        async getCourseList({ commit, state }) {
            if (!state.courses.length) {
                let tags = await apiCourses.getTags();
                commit('setCourseList', tags);
            }

            return state.courses;
        }
    },
}