'use strict';
const koaRouter = require('koa-router');
const router = koaRouter();
const DB = require('./db').DB;
const Response = require('./reponse');

router.post('/api/auth/login', async function (ctx, next) {
  ctx.set("Access-Control-Allow-Origin", "*");
  let loginName = ctx.request.body.loginName,
    passWord = ctx.request.body.password,
    response = new Response();
  const userInfo = DB.getDB({
    loginName: loginName
  });
  if (userInfo.passWord == passWord) {
    response.setResponse(200, true, "OK", {
      "id": userInfo.id,
      "userName": userInfo.userName
    });
    ctx.body = response;
  } else {
    response.setResponse(1001, false, "密码错误");
    ctx.body = response;
  }
});
router.get('/api/auth/logout', async function (ctx, next) {
  ctx.set("Access-Control-Allow-Origin", "*");
  let response = new Response();
  ctx.body = response;
});

exports.router = router;
