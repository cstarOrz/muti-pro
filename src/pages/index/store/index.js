import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from '@/stores/login';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    loginStore: loginStore
  }
})
export default store;
