const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(path.resolve(__dirname, '../data/userInfo.json'));
const db = low(adapter);

function creatDB() {
  db.defaults({
    userInfo: []
  }).write();
  if (!db.get('userInfo').size().value()) {
    setDB({
      id: 10001,
      loginName: 'root',
      userName: '管理员',
      passWord: 'admin'
    });
  }
}

function setDB(data) {
  db.get('userInfo').push(data)
    .write();
}

function getDB(name) {
  return db.get('userInfo')
    .find(name)
    .value();
}

exports.DB = {
  creatDB,
  setDB,
  getDB
};
