import storage from './storage';
window.addEventListener("storage", function (e) {
  console.log(storage.getStorage('isLogin'));
  // if (storage.getStorage('isLogin') === null) {
  //   window.location.href = './index.html';
  // }
  window.location.href = './index.html';
});
