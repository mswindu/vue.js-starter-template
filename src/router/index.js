import Vue from 'vue';
import VueRouter from 'vue-router';
import paths from './paths';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: paths,
  // https://router.vuejs.org/ru/guide/essentials/history-mode.html
  mode: 'history',
});

/* EXAMPLE:
// If the user is not authorized, then we force him to log in.
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);

  const loggedIn = store.getters['account/status'] === 'loggedIn';

  // Если пользователь не авторизован, то заставляем авторизоваться
  if (authRequired && !loggedIn) {
    return next('/login');
  }

  // Если пользователь авторизован, то не даем возможности заходить на страницу входа
  if (['/login'].includes(to.path) && loggedIn) {
    return next('/');
  }

  return next();
}
  */
router.beforeEach((to, from, next) => next());

export default router;
