import { IContainerModule } from "@coloration/micro-framework"


export enum DemoActionType {}

const state = {}
const action = {}

export type DemoState = typeof state
export type DemoAction = typeof action

export interface IDemoModule<T> extends IContainerModule {
  name: string
  mountId: string,
  action: { [key: string]: <K = any>(state: T, payload: K) => any }
}

export const demoModule: IDemoModule<DemoState> = {
  mountId: 'container-demo',
  name: 'container-demo',
  state,
  action
}
