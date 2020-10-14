import { Server } from 'http'
import { print } from 'configs/utils'
import createServer from 'configs/application'
import * as bootstrap from 'configs/bootstrap'

module.exports = (async (): Promise<Server> => {
  try {
    bootstrap.before()
    const app = await createServer()
    const { NODE_ENV, APP_PORT } = process.env
    return app.listen(APP_PORT, () => {
      print.log(`server listening on ${APP_PORT}, in ${NODE_ENV} mode.`)
      bootstrap.after()
    })
  } catch (e) {
    console.log(e)
  }
})()
