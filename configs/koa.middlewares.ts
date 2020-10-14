import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'

export const useMiddlewares = <T extends Koa>(app: T): T => {
  process.env.NODE_ENV !== 'test' && app.use(logger())

  app.use(bodyParser())

  app.use(
    compress({
      // 阈值, 当超过这个值时开启压缩
      threshold: 2048,
    }),
  )

  return app
}
