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
            likes = Array.isArray(likes) ? likes : null;

            if (!likes) {
                likes = await apiLikes.getLikeList(field);

                commit('setLikeList', { field, likes });
                storage.setLikes({ field, likes: JSON.stringify(likes) });
            }
            
            return likes;
        },

        async addLike({ commit }, payload) {
            await apiLikes.add(payload);
            let likes = await apiLikes.getLikeList(payload.field);

            commit('setLikeList', { field: payload.field, likes });
            storage.setLikes({ field: payload.field, likes: JSON.stringify(likes) });
        },

        async deleteLike({ commit }, payload) {
            await apiLikes.delete(payload);
            let likes = await apiLikes.getLikeList('articles');

            commit('setLikeList', { field: payload.field, likes });
            storage.setLikes({ field: payload.field, likes: JSON.stringify(likes) });
        },
    },
}