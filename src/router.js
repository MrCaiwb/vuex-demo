import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      props: true,
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/user',
      component: () => import('./views/User.vue')
    }
  ]
})
