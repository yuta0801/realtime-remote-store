import { from } from 'rxjs'
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

const store$ = from(store)

export const initialState = store.getState()

export default {
  in: store.dispatch,
  out: store$,
}
