import { ReactHookStore } from '@coloration/micro-framework'
import { IListItemDto } from './api'
import { IDemoRootProps } from './rootProps'


export interface IDemoStore extends IDemoRootProps {
  list: IListItemDto[]
}


export const S = new ReactHookStore<IDemoStore>({
  list: []
})


export const useStore = S.useStore

