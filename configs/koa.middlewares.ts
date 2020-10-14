import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

export const useMiddlewares = <T extends Koa>(app: T): T => {
  process.env.NODE_ENV !== 'test' && app.use(logger())

  app.use(bodyParser())

  return app
}
