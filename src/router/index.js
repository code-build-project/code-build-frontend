import Vue from 'vue'
import axios from 'axios';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'courses',
        name: 'Courses',
        component: () => import('@/views/Courses.vue')
      },
      {
        path: 'course',
        name: 'Course',
        component: () => import('@/views/Course.vue')
      },
      {
        path: 'articles',
        name: 'Articles',
        component: () => import('@/views/Articles.vue')
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/Article.vue')
      },
      {
        path: 'favorites',
        name: 'Favorites',
        component: () => import('@/views/Favorites.vue'),
        // Попытка перейти в избранное без авторизации
        beforeEnter: async (to, from, next) => {
          await axios.get('/user')
            .then(() => {
              next()
            })
            .catch(() => {
              next({ name: 'Home' })
            })
        }
      },
      {
        path: 'cabinet',
        name: 'Cabinet',
        component: () => import('@/views/Cabinet.vue'),
        // Попытка перейти в личный кабинет без авторизации
        beforeEnter: async (to, from, next) => {
          await axios.get('/user')
            .then(() => {
              next()
            })
            .catch(() => {
              next({ name: 'Home' })
            })
        }
      },
      {
        path: 'subscribe',
        name: 'Subscribe',
        component: () => import('@/views/Subscribe.vue'),
        // Попытка перейти на страницу покупки подписки, когда подписка уже имеется
        beforeEnter: async (to, from, next) => {
          await axios.get('/user')
            .then((res) => {
              if(res.data.isPremium) {
                next({ name: 'Home' });
              } else next()
            })
            .catch(() => {
              next()
            })
        }
      },
      {
        path: 'icons',
        name: 'Icons',
        component: () => import('@/views/Icons.vue')
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
        component: () => import('@/views/Authorization.vue')
      },
      {
        path: 'reg',
        name: 'Registration',
        component: () => import('@/views/Registration.vue'),
        props: true
      },
      {
        path: 'reg/confirm',
        name: 'SuccessRegistration',
        component: () => import('@/views/SuccessRegistration.vue'),
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  // При переходе на странциу MainLayout по дефолту открывается главная страница
  if (to.name !== 'Home' && to.path === '/') {
    next({ name: 'Home' })
  } else next()
})

export default router