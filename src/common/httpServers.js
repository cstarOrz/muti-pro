import axios from './http';
import {LOGION} from './resetApi';

export function userLogin(parm) {
  return axios.post(LOGION.userLogin, parm);
}

export function userLogout() {
  return axios.get(LOGION.userLogout);
}
