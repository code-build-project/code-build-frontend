import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;

// Обработка ошибки при переходе на одну и ту же страницу. Чтобы не было ошибки в консоли
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        if (
            err.name !== 'NavigationDuplicated' &&
            !err.message.includes('Avoided redundant navigation to current location')
        ) {
            console.log(err);
        }
    });
};

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/pages/Home.vue')
            },
            {
                path: 'courses',
                name: 'Courses',
                component: () => import('@/pages/Courses.vue')
            },
            {
                path: 'course',
                name: 'Course',
                component: () => import('@/pages/Course.vue')
            },
            {
                path: 'articles',
                name: 'Articles',
                component: () => import('@/pages/Articles.vue')
            },
            {
                path: 'article',
                name: 'Article',
                component: () => import('@/pages/Article.vue')
            },
            {
                path: 'favorites',
                name: 'Favorites',
                component: () => import('@/pages/Favorites.vue'),
            },
            {
                path: 'cabinet',
                name: 'Cabinet',
                component: () => import('@/pages/Cabinet.vue'),
            },
            {
                path: 'subscribe',
                name: 'Subscribe',
                component: () => import('@/pages/Subscribe.vue'),
            },
            {
                path: 'icons',
                name: 'Icons',
                component: () => import('@/pages/Icons.vue')
            }
        ]
    },
    {
        path: '',
        name: 'AuthLayout',
        component: () => import('@/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'auth',
                name: 'Authorization',
                component: () => import('@/pages/Authorization.vue')
            },
            {
                path: 'reg',
                name: 'Registration',
                component: () => import('@/pages/Registration.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

router.beforeEach(async (to, from, next) => {
    // При переходе на странциу MainLayout по дефолту открывается главная страница
    if (to.name !== 'Home' && to.path === '/') {
        next({ name: 'Home' });
    } else next();
});

export default router;