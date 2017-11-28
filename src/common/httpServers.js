import axios from './http';
import {LOGION} from './resetApi';

export function userLogin(username, password) {
  return axios.post(LOGION.userLogin, {
    loginName: username,
    password: password
  });
}

export function userLogout() {
  return axios.get(LOGION.userLogout);
}
