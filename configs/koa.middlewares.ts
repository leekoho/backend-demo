import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import zlib from 'zlib'
import compressible from 'compressible'

export const useMiddlewares = <T extends Koa>(app: T): T => {
  process.env.NODE_ENV !== 'test' && app.use(logger())

  app.use(bodyParser())

  app.use(
    compress({
      filter: content_type => compressible(content_type),
      // 阈值, 当超过这个值时开启压缩
      threshold: 2048,
      gzip: {
        flush: zlib.constants.Z_SYNC_FLUSH,
      },
      deflate: {
        flush: zlib.constants.Z_SYNC_FLUSH,
      },
      // disable brotli
      br: false,
    }),
  )

  return app
}
