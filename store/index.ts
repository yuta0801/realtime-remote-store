import { createStore } from 'redux'
import { from } from 'rxjs'
import reducers from './reducers'

const store = createStore(reducers)

const store$ = from(store)

export const initialState = store.getState()

export default {
  in: store.dispatch,
  out: store$,
}
