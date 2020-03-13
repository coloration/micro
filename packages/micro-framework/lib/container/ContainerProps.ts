import { PlainObject } from '@coloration/kit'
import { IGlobalModule } from '../scm'

export interface IContainerProps {
  rootPath: string
  access: PlainObject<boolean>
  i18nLocale?: { [key: string]: { [key: string]: string } }
}

export interface IContainerModule extends IGlobalModule {
  mountId: string,
  name: string,
}