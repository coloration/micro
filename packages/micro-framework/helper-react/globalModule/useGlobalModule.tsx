import { useState, useCallback } from 'react'
import { PlainObject } from '../../types'

export interface Module {
  state: PlainObject,
  action: { [key: string]: (state: PlainObject, payload: PlainObject) => PlainObject }
}

const _store = {
  modules: {} as { [key: string]: Module },
}

export function registerModule (name: string, module: Module) {
  _store[name] = module
}

/// for react
export function useGlobalModule<T extends any, K extends string> (moduleName: string) {
  const m: T = _store[moduleName]
  if (m === undefined) throw new Error(`[useGlobalStore]: Module '${moduleName}' is not existed.`)

  const [_, trigger] = useState(Object.create(null))
  const dispatch = useCallback((actionName: K, payload: Partial<T>) => {
    const newState = m.action[actionName](m.state, payload)
    m.state = newState
    trigger(Object.create(null))
  }, [])
  return { state: m.state as T, dispatch }
}