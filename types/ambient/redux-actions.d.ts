import { Action, ActionFunctions } from 'redux-actions'

declare module 'redux-actions' {
  export function createAction<Params, Payload>(
    actionType: string,
    payloadCreator: (...params: Params[]) => Payload
  ): (...params: Params[]) => Action<Payload>
  export type ActionMaps<
     ActionCreators extends { [key: string]: ActionFunctions<any> }
   > = { [key in keyof ActionCreators]: ReturnType<ActionCreators[key]> }
}
