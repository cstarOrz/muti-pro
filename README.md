# muti-pro

> 基于Vue的多页应用

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 增加一个tmpl生成，pages下目录结构，从tmpls获取(默认new-tmpl)
npm run tmpl === npm run tmpl new-tmpl

## 默认不添加兼容promise和console，默认new-tmpl，false
npm run tmpl yourdir === npm run tmpl yourdir false

## 添加兼容promise和console
npm run tmpl true === npm run tmpl new-tmpl true
npm run tmpl yourdir true === npm run tmpl yourdir true

# 启动服务端
npm run server
```
## 文件说明
*  pro.config.json----本地预览地址及反向代理设置
*  src/stores ---- 存放公用vuex模块，并增加了命名空间
``` bash
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
```
*  data/*json ---- json格式数据库，默认用户root/admin

