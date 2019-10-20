import { Subject } from 'rxjs'
import { scan } from 'rxjs/operators'
import { reducer } from './count'

const INIT_ACTION = { type: '@INIT' }
export const initialState = reducer(undefined, INIT_ACTION as any)

const store = new Subject()

export default {
  in: store,
  out: store.pipe(scan(reducer, initialState)),
}
