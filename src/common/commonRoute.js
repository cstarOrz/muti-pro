export const Login = {
  path: 'login',
  component: resolve => require(['@/components/login/login.vue'], resolve),
  beforeEnter(to, from, next) {
    next();
  }
};
export const NotFound = {
  path: 'notFound',
  component: resolve => require(['@/components/NotFound/not-found.vue'], resolve),
  beforeEnter(to, from, next) {
    next();
  }
};
export const Welcome = {
  path: '/',
  component: resolve => require(['@/components/Welcome/Welcome.vue'], resolve),
  beforeEnter(to, from, next) {
    next();
  }
};
