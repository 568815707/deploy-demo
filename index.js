'use strict'

const Koa = require('koa')
const app = new Koa()

const routers = require('./server/first.js')

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(9000, function () {
  console.log('listen on 9000')
})

process.on('uncaughtException', function (err) {
  console.log(err)
  console.log(err.message)
  console.log(err.stack)
  process.exit()
})
