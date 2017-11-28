import axios from 'axios';
import storage from '@/common/storage';
import {
  LOGION
} from './resetApi';

// http request 拦截器
axios.interceptors.request.use((config) => {
  let isLogin = storage.getStorage('isLogin') === 'true';
  if (isLogin || config.url == LOGION.userLogin || config.url == LOGION.userLogout) {
    return config;
  } else {
    window.location.href = './index.html';
  }
}, (err) => {
  return Promise.reject(err);
});
// http response 拦截器
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    console.log(401, '权限不足');
  } else {
    return Promise.resolve(error.response);
  }
});

export default axios;
