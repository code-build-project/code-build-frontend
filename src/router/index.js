import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'icons',
        name: 'Icons',
        component: () => import('@/views/Icons.vue'),
      },
    ],
  },
  {
    path: '',
    name: 'AuthLayout',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'auth',
        name: 'Authorization',
        component: () => import('@/components/Authorization.vue'),
      },
      {
        path: 'reg',
        name: 'Registration',
        component: () => import('@/components/Registration.vue'),
        props: true,
      },
      {
        path: 'reg/confirm',
        name: 'SuccessRegistration',
        component: () => import('@/components/SuccessRegistration.vue'),
        props: true,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'MainLayout' && to.path === '/') {
    next({ name: 'MainLayout' })
  } else next()
})

export default router
