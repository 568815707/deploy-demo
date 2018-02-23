// first router

const router = require('koa-router')()
const { query } = require('../../libs/mysql.js')

const table = 'demo'

router.get('/', async(ctx, next) => {
  const arr = await query(`
    select uid, video, content from ${table}
    `)
  let result = arr.map(({uid, video, content}) => {
    return {
      uid,
      video,
      content
    }
  })

  ctx.body = {
    result
  }
  await next()
})

router.get('/hello', async(ctx, next) => {
  ctx.body = 'hello page'
})

router.get('/first', async(ctx, next) => {
  ctx.body = 'hello first'
})

module.exports = router
