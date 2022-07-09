import Likes from '@/services/likes';
import storage from '@/helpers/storage';

const apiLikes = new Likes();

export default  {
    namespaced: true,

    state: {
        articles: [],
        courses: [],
        lessons: [],
    },

    mutations: {
        setLikeList(state, payload) {
            state[payload.field] = payload.likes;
        },
    },

    actions: {
        async getLikeList({ commit }, field) {
            let likes = storage.getLikes(field);
            likes = likes ? JSON.parse(likes) : null;
            likes = Array.isArray(likes) && likes.length ? likes : null;

            if (!likes) {
                likes = await apiLikes.getLikeList(field);

                commit('setLikeList', { field, likes });
                storage.setLikes({ field, likes: JSON.stringify(likes) });
            }
            
            return likes;
        },

        async addLike({ dispatch }, payload) {
            await apiLikes.add(payload);
            dispatch('clearLikeList', payload.field);
            dispatch('getLikeList', payload.field);
        },

        async deleteLike({ dispatch }, payload) {
            await apiLikes.delete(payload);
            dispatch('clearLikeList', payload.field);
            dispatch('getLikeList', payload.field);
        },

        clearLikeList({ commit }, field) {
            commit('setLikeList', { field, likes: [] });
            storage.setLikes({ field, likes: JSON.stringify([]) });
        },
    },
}