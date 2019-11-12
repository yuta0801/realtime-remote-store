import { Store } from 'redux'

export type StoreAction<S extends Store> =
  S extends Store<any, infer Action> ? Action : never
