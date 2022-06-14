import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About' },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    props:true,
  },
  {
    path: '/post',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/PostView.vue')
  },
  {
    path: '/post/:id',
    name: 'PostShow',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostShow.vue'),
    props:true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router

