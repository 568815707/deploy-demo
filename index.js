'use strict'

// var bd = require('bd') // app框架
// var serve = require('koa-static') // koa 的静态资源
// var path = require('path') // 路径
// var app = bd()
// const fs = require('fs')
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

const routers = require('./server/router/first.js')

app.use(routers.routes()).use(routers.allowedMethods());

app.listen(9000, function () {
  console.log('listen on 9000');
})

process.on('uncaughtException', function (err) {
  console.log(err)
  console.log(err.message)
  console.log(err.stack)
  process.exit()
})
