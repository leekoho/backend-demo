import { InterceptorInterface, Action, Interceptor } from 'routing-controllers'

@Interceptor()
export class AutoAssignJSONInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any): any {
    return JSON.stringify(Object.assign({ message: 'ok' }, { data: content || null }))
  }
}
