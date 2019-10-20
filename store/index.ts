import { Subject } from 'rxjs'
import { scan } from 'rxjs/operators'
import reducers from './reducers'

const INIT_ACTION = { type: '@INIT' }
export const initialState = reducers(undefined, INIT_ACTION as any)

const store = new Subject()

export default {
  in: store,
  out: store.pipe(scan(reducers, initialState)),
}
