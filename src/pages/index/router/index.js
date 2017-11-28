import Vue from 'vue';
import Router from 'vue-router';
import Root from '@/components/Root/Root';

import { Login, NotFound } from '@/common/commonRoute';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Root',
    component: Root,
    children: [
      Login,
      NotFound
    ]
  }]
});
