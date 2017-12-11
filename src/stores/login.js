import storage from "@/common/storage";
import {
  userLogin,
  userLogout
} from "@/common/httpServers";
// root state object.
// each Vuex instance is just a single state tree.
const state = {
  isLogin: storage.getStorage("isLogin") === "true",
  userInfo: {}
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  login(state, res) {
    state.userInfo = res;
    state.isLogin = true;
  },
  loginOut(state) {
    state.isLogin = false;
    state.userInfo = {};
  }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  loginAction: ({
    commit
  }, config) => {
    return new Promise((resolve, reject) => {
      userLogin(config).then(res => {
        if (res.data.code == 200) {
          commit('login', res.data.data);
          storage.setStorage("isLogin", "true");
          storage.setStorage("userInfo", res.data.data);
          resolve();
        } else {
          alert(res.data.message);
        }
      });
    });
  },
  loginOutAction: ({
    commit
  }) => {
    return new Promise((resolve, reject) => {
      userLogout().then(res => {
        if (res.data.code == 200) {
          commit('loginOut');
          storage.removeStorage("isLogin");
          storage.removeStorage("userInfo");
          resolve();
        } else {
          alert(res.data.message);
        }
      });
    });
  },
  loginInfoAction: ({
    commit
  }) => {
    console.log('loginInfo');
  }
};

// getters are functions
const getters = {
  isLogin: (state) => {
    return state.isLogin;
  },
  userInfo: state => state.userInfo
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
