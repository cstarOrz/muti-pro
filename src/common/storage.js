export default {
  name: 'storage',
  storage: window.localStorage,
  setStorage(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  },
  getStorage(key) {
    return JSON.parse(this.storage.getItem(key));
  },
  removeStorage(key) {
    this.storage.removeItem(key);
  },
  clearStorage() {
    this.storage.clear();
  }
};
