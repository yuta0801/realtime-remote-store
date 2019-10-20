import { ActionFunctions } from 'redux-actions'

export type ActionMaps<
  ActionCreators extends { [key: string]: ActionFunctions<any> }
> = { [key in keyof ActionCreators]: ReturnType<ActionCreators[key]> }
