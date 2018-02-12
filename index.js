'use strict'

const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(function * () {
  this.body = '<p>我是个HTML片段</p>'
})

app.listen(9000, function () {
  console.log('listen on 9000');
})
