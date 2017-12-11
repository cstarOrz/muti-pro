'use strict';
const path = require('path');

const Koa = require('koa');
const koaBody = require("koa-body");
const staticFiles = require('koa-static');
const logger = require('koa-logger');
const DB = require('./db').DB;

const app = new Koa();

app.use(koaBody({
  multipart: true,
  formLimit: '50mb',
  jsonLimit: '50mb',
  formidable: {
    uploadDir: path.resolve(__dirname, '../static'),
    keepExtensions: true
  }
}));
app.use(staticFiles(path.resolve(__dirname, '../static')));
app.use(logger());

var routers = require("./router.js");
// console.log(routers);
app.use(routers.router.routes()).use(routers.router.allowedMethods());

// console.log('message');
DB.creatDB();
// console.log('message');
app.listen(7777, () => console.log('Koa start at 7777...'));
