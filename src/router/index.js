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
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'courses',
        name: 'Courses',
        component: () => import('@/views/Courses.vue'),
      },
      {
        path: 'course',
        name: 'Course',
        component: () => import('@/views/Course.vue'),
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
        component: () => import('@/views/Authorization.vue'),
      },
      {
        path: 'reg',
        name: 'Registration',
        component: () => import('@/views/Registration.vue'),
        props: true,
      },
      {
        path: 'reg/confirm',
        name: 'SuccessRegistration',
        component: () => import('@/views/SuccessRegistration.vue'),
        props: true,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && to.path === '/') {
    next({ name: 'Home' })
  } else next()
})

export default router
