export * from './api'


export function pathPrefix(prefix: string | string[]) {
  return function (_location: Location) {
    const prefixs: string[] = typeof prefix === 'string' ? [prefix] : prefix
    return prefixs.some(prefix => window.location.pathname.indexOf(prefix) === 0)
  }
}

export function genCatch (handler: (message: string) => any) {
  return function errorCatcher (e: any) {
    let message: string
    if (e.message) {
      message = e.message
    }
    else {
      
    }

    return handler(message)
  }
}